const axios = require("axios");
const isEmpty = require("lodash").isEmpty;
const pick = require("lodash").pick;
const fs = require("fs");

const server = `https://esi.evetech.net`;
const version = `latest`;
const datasource = `datasource=tranquility`;
const language = `language=en-us`;

const jsonRegionsList = JSON.parse(fs.readFileSync("./allWorldsInEve/ALLRegionsList.json"));
const jsonAllSystemsInfoList = JSON.parse(fs.readFileSync("./allWorldsInEve/ALLSystemsInfo.json"));
const oreList = JSON.parse(fs.readFileSync("rawOres.json"))

const orderType = "sell";
const page = 1;

const compressedVeldsparFamily = oreList.veldspar.compressed;

const jita = {
  systemId: 30000142,
  systemName: "Jita",
  regionId: 10000002,
  regionName: "The Forge"
}
const sellOrdersPromise = [];


compressedVeldsparFamily.forEach(({ id: oreId }) => {
  const url = `${server}/${version}/markets/${jita.regionId}/orders/?${datasource}&order_type=${orderType}&page=${page}&type_id=${oreId}`;
  const promise = axios.get(url);
  sellOrdersPromise.push(promise);
});

console.log('sellOrdersPromise num', sellOrdersPromise.length)

Promise.all(sellOrdersPromise).then((respArray) => {
  console.log('responses num', respArray.length);
  const okResponses = respArray.filter(resp => resp.status == 200);
  const notOkResponses = respArray.filter(resp => resp.status !== 200)

  console.log('ok responses', okResponses.length, 'not ok responses', notOkResponses.length);

  const data = respArray
    .map(({ data }) => data)
    .filter((obj) => !isEmpty(obj))
    .reduce((acc, obj) => acc.concat(obj), []);

    const sortedAscByPrice = sortAscByPrice(data);
    const withOreName = addOreName(sortedAscByPrice);


    fs.writeFileSync("JItaSellCompressedVeldsparPrices.json", JSON.stringify(withOreName));
})


const addOreName = sourceData => {
  return sourceData.map(sellOrder => {
    const sell_order_type_id = sellOrder.type_id; 
    const foundOre = compressedVeldsparFamily.find(({id}) => id === sell_order_type_id);
    sellOrder.oreName = foundOre.name;
    return sellOrder;
  })
}

const sortAscByPrice = sourceData => {
  return [...sourceData.sort((a,b) => a.price - b.price)];
}