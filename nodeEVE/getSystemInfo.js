const axios = require("axios");
const fs = require("fs");

const server = `https://esi.evetech.net`;
const version = `latest`;
const datasource = `datasource=tranquility`;
const language = `language=en-us`;

const rawdataSystemList = fs.readFileSync("constelationsAndItsSystems.json");
const jsonSystemList = JSON.parse(rawdataSystemList);

const systemsIdList = jsonSystemList.reduce((systemIds, { systems }) => {
  systemIds = [...systemIds, ...systems];
  return systemIds;
}, []);

let systemInfoPromises = [];
let numOfRequests = 0;
systemsIdList.forEach((systemId) => {
  const promise = axios.get(
    `${server}/${version}/universe/systems/${systemId}/?${datasource}&${language}`
  );
  numOfRequests++;
  systemInfoPromises.push(promise);
});

console.log({ numOfRequests });

Promise.all(systemInfoPromises).then((values) => {
  const data = values.map(({ data }) => data);
  // fs.writeFileSync("systemsListDetails.json", JSON.stringify(data));
  fs.writeFileSync("dupa.json", JSON.stringify(data));
});
