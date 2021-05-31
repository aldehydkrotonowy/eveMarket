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

const orderType = "sell";
const page = 1;

const sellOrdersPromise = [];

const rawOre = [
  {
    "id": 1230,
    "name": "Veldspar"
  },
  {
    "id": 17471,
    "name": "Dense Veldspar"
  },
  {
    "id": 17470,
    "name": "Concentrated Veldspar"
  },
  {
    "id": 46689,
    "name": "Stable Veldspar"
  }
]

jsonRegionsList.forEach(({ id: regionId }) => {
  rawOre.forEach(({ id: oreId }) => {
    const url = `${server}/${version}/markets/${regionId}/orders/?${datasource}&order_type=${orderType}&page=${page}&type_id=${oreId}`;
    const promise = axios.get(url);
    sellOrdersPromise.push(promise);
  });
});

console.log('sellOrdersPromise num', sellOrdersPromise.length);

Promise.all(sellOrdersPromise).then((respArray) => {
  console.log('responses num', respArray.length);
  const okResponses = respArray.filter(resp => resp.status == 200);
  const notOkResponses = respArray.filter(resp => resp.status !== 200);

  console.log('ok responses', okResponses.length, 'not ok responses', notOkResponses.length);

  const data = respArray
    .map(({ data }) => data)
    .filter((obj) => !isEmpty(obj))
    .reduce((acc, obj) => acc.concat(obj), [])
  
    const sortedDesc = sortDescendingByVolumeRemain(data);
    const withSysNameAndSecStatus = addSysNameAndSecStatus(sortedDesc);
    const withOreName = addOreName(withSysNameAndSecStatus); 

    const qtyAbove10M = filterAbove10M(withOreName);
    const sortedAscByPrice = sortAscByPrice(qtyAbove10M);

    const results = {
      allOreSellOrders: withOreName,
      bigSortedByPrice: sortedAscByPrice
    }

    fs.writeFileSync("allVeldsparSellOrdersInAllRegions.json", JSON.stringify(results))
  })



const addSysNameAndSecStatus = (sourceData) => {
  return sourceData.map(sellOrder => {
    const sell_order_sys_id = sellOrder.system_id;
    const foundSystem = jsonAllSystemsInfoList.find(({data}) => data.system_id===sell_order_sys_id);
    sellOrder.systemName = foundSystem.data.name;
    sellOrder.secStatus = foundSystem.data.security_status;
    return sellOrder;
  })
}

const addOreName = sourceData => {
  return sourceData.map(sellOrder => {
    const sell_order_type_id = sellOrder.type_id; 
    const foundOre =rawOre.find(({id}) => id === sell_order_type_id);
    sellOrder.oreName = foundOre.name;
    return sellOrder;
  })
}

const sortDescendingByVolumeRemain = sourceData => {
  const sortedDesc = [...sourceData.sort((a,b) => b.volume_remain - a.volume_remain)];
  return sortedDesc;
}

const filterAbove10M = sourceData => {
  return sourceData.filter(order => order.volume_remain > 10000000);
}

const sortAscByPrice = sourceData => {
  return [...sourceData.sort((a,b) => a.price - b.price)];
}