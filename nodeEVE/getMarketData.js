const axios = require("axios");
const isEmpty = require("lodash").isEmpty;
const pick = require("lodash").pick;
const fs = require("fs");

const server = `https://esi.evetech.net`;
const version = `latest`;
const datasource = `datasource=tranquility`;
const language = `language=en-us`;

const jsonRegionsList = JSON.parse(fs.readFileSync("regionsList.json"));
const jsonInventoryList = JSON.parse(fs.readFileSync("rawMinerals.json"));
const jsonSafeSystemsList = JSON.parse(
  fs.readFileSync("systemsSecAbove0.4.json")
);

const orderType = "sell";
const page = 1;

const sellOrdersPromise = [];

jsonRegionsList.forEach(({ id: regionId }) => {
  jsonInventoryList.forEach(({ id: inventoryId }) => {
    const url = `${server}/${version}/markets/${regionId}/orders/?${datasource}&order_type=${orderType}&page=${page}&type_id=${inventoryId}`;
    const promise = axios.get(url);
    sellOrdersPromise.push(promise);
  });
});

Promise.all(sellOrdersPromise).then((values) => {
  const data = values
    .map(({ data }) => data)
    .filter((obj) => !isEmpty(obj))
    .reduce((acc, obj) => acc.concat(obj), []);

  const withNamedSystems = data.map((sellOrder) => {
    const system = jsonSafeSystemsList.find(
      (sys) => sys.systemId === sellOrder.system_id
    );

    const fieldsToPick = ["volume_remain", "price", "duration"];
    const pickedFields = pick(sellOrder, fieldsToPick);

    pickedFields.systemName = system ? system.systemName : "not found";
    pickedFields.regionName = system ? system.regionName : "not found";
    pickedFields.inventoryName = jsonInventoryList.find(
      ({ id }) => id === sellOrder.type_id
    ).name;
    return pickedFields;
  });

  const removedNoNames = withNamedSystems.filter(
    (order) => order.systemName !== "not found"
  );

  const byInventory = jsonInventoryList.reduce((acc, { name, maxPrice }) => {
    const dataForInventory = removedNoNames.filter(
      (item) => item.inventoryName === name
    );

    const removeSmallVolume = dataForInventory.filter(
      (order) => order.volume_remain > 1000
    );

    const filteredPrices = removeSmallVolume.filter(
      (sellOrder) => sellOrder.price < maxPrice
    );

    const orderedDsc = filteredPrices.sort((sec, first) => {
      if (parseFloat(sec.price.toFixed(2)) > parseFloat(first.price.toFixed(2)))
        return 0;
      return -1;
    });

    acc[name] = orderedDsc;
    return acc;
  }, {});

  fs.writeFileSync("sellOrders.json", JSON.stringify(byInventory));
});
