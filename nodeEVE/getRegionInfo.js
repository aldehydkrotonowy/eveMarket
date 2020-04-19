const axios = require("axios");
const fs = require("fs");

const server = `https://esi.evetech.net`;
const version = `latest`;
const datasource = `datasource=tranquility`;
const language = `language=en-us`;

const rawdataRegionsList = fs.readFileSync("regionsList.json");
const regionsList = JSON.parse(rawdataRegionsList);

const regionIdList = regionsList.regions.map(({ id }) => id);

let regionInfoPromises = [];

regionIdList.forEach((regionId) => {
  const promise = axios.get(
    `${server}/${version}/universe/regions/${regionId}/?${datasource}&${language}`
  );
  regionInfoPromises.push(promise);
});

Promise.all(regionInfoPromises).then((values) => {
  const data = values.map(({ data }) => data);
  fs.writeFileSync("regionsAndItsConstellatios.json", JSON.stringify(data));
});
