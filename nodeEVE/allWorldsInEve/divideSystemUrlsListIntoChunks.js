const axios = require("axios");
const fs = require("fs");

const server = `https://esi.evetech.net`;
const version = `latest`;
const datasource = `datasource=tranquility`;
const language = `language=en-us`;

const rawdataSystemList = fs.readFileSync("ALLSystemsInAllConstelations.json");
const jsonSystemList = JSON.parse(rawdataSystemList);

const systemsIdList = jsonSystemList
  .map(({ data }) => data)
  .reduce((systemIds, { systems }) => {
    systemIds = [...systemIds, ...systems];
    return systemIds;
  }, []);

let initUrlList = systemsIdList.reduce((acc, systemId) => {
  const url = `${server}/${version}/universe/systems/${systemId}/?${datasource}&${language}`;
  acc.push(url);
  return acc;
}, []);

// fs.writeFileSync(`allSystemUrls.json`, JSON.stringify(initUrlList));

const chunk = 1657;
const els = initUrlList.length;

for (let i = 0; i < els; i += chunk) {
  const num = i / chunk;
  const data = initUrlList.slice(i, i + chunk);
  fs.writeFileSync(`${num}.json`, JSON.stringify(data));
}
