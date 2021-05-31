const axios = require("axios");
const isEmpty = require("lodash").isEmpty;
const maxBy = require("lodash").maxBy;
const pick = require("lodash").pick;
const fs = require("fs");

const server = `https://esi.evetech.net`;
const version = `latest`;
const datasource = `datasource=tranquility`;
const language = `language=en-us`;

const jsonRegionsList = JSON.parse(fs.readFileSync("selectedRegionsList.json"));
const jsonItemsList = JSON.parse(fs.readFileSync("rawMinerals.json"));
const jsonSafeSystemsList = JSON.parse(
  fs.readFileSync("./allWorldsInEve/ALLSystemsSelectedProps.json")
);

const orderTypeSell = "sell";
const orderTypeBuy = "buy";
const orderTypeAll = "all";
const page = 1;

const sellOrdersPromise = [];
let numOfRequsts = 0;

jsonRegionsList.forEach(({ id: regionId }) => {
  jsonItemsList.forEach(({ id: inventoryId }) => {
    const url = `${server}/${version}/markets/${regionId}/orders/?${datasource}&order_type=${orderTypeAll}&page=${page}&type_id=${inventoryId}`;
    const promise = axios.get(url);
    sellOrdersPromise.push(promise);
    numOfRequsts++;
  });
});

console.log({ numOfRequsts });

Promise.all(sellOrdersPromise)
  .then((values) => {

    const data = values
      .map(({ data }) => data)
      .filter((obj) => !isEmpty(obj))
      .reduce((acc, obj) => acc.concat(obj), []);
    
    const withNamedSystems = data.map((order) => {
      const system = jsonSafeSystemsList.find(
        (sys) => sys.systemId === order.system_id
      );
      
      const fieldsToPick = [
        "volume_remain",
        "price",
        "duration",
        "is_buy_order",
      ];
      const pickedFields = pick(order, fieldsToPick);

      pickedFields.systemName = system ? system.systemName : "not found";
      pickedFields.regionName = system ? system.regionName : "not found";
      pickedFields.inventoryName = jsonItemsList.find(
        ({ id }) => id === order.type_id
      ).name;
      return pickedFields;
    });

    const removedNoNames = withNamedSystems.filter(
      (order) => order.systemName !== "not found"
    );
    fs.writeFileSync("debug.json", JSON.stringify(withNamedSystems));
    const sellBuyDiff = jsonItemsList.reduce((acc, { name }) => {
      const dataForInventory = removedNoNames.filter(
        (item) => item.inventoryName === name
      );
      
      const removeSmallVolume = dataForInventory.filter(
        (order) => order.volume_remain > 1000
      );

      const onlySellOrders = removeSmallVolume.filter(
        (order) => !order.is_buy_order
      );
      const onlyBuyOrders = removeSmallVolume.filter(
        (order) => order.is_buy_order
      );

      const sellAsc = onlySellOrders.sort((s, f) => s.price - f.price);
      const buyDesc = onlyBuyOrders.sort((s, f) => f.price - s.price);

      const bestSell = sellAsc[0];
      const bestBuy = buyDesc[0];

      const smallerVolumeRemain = Math.min(
        bestSell.volume_remain,
        bestBuy.volume_remain
      );

      const toInvest = smallerVolumeRemain * bestSell.price;
      const toEarn = smallerVolumeRemain * bestBuy.price;
      const profit = toEarn - toInvest;

      // console.log({ smallerVolumeRemain, toInvest, toEarn, profit });

      acc[name] = { bestSell, bestBuy, profit };
      return acc;
    }, {});

    const maxProfit = Object.values(sellBuyDiff).map((itemType) => {
      return {
        maxProfit: itemType.profit,
        name: itemType.bestSell.inventoryName,
        buyInSystem: itemType.bestSell.systemName,
        sellInSystem: itemType.bestBuy.systemName,
      };
    });

    sellBuyDiff["maxProfit"] = maxProfit.filter(
      (offer) => offer.maxProfit > 600000
    );
    fs.writeFileSync("mostProfitableRawMineralOffers.json", JSON.stringify(sellBuyDiff));
  })
  .catch((err) => console.log("not this time :(", err));
