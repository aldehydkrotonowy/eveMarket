const axios = require("axios");
const fs = require("fs");

const server = `https://esi.evetech.net`;
const version = `latest`;
const datasource = `datasource=tranquility`;
const language = `language=en-us`;

const rawdataRegionsList = fs.readFileSync("regionsListInfo.json");
const jsonRegionsList = JSON.parse(rawdataRegionsList);

const constellationsIdList = jsonRegionsList.reduce(
  (constellationsIds, { constellations }) => {
    constellationsIds = [...constellationsIds, ...constellations];
    return constellationsIds;
  },
  []
);

let constellationInfoPromises = [];

constellationsIdList.forEach((constellationId) => {
  const promise = axios.get(
    `${server}/${version}/universe/constellations/${constellationId}/?${datasource}&${language}`
  );
  constellationInfoPromises.push(promise);
});

Promise.all(constellationInfoPromises).then((values) => {
  const data = values.map(({ data }) => data);
  fs.writeFileSync("constelationsAndItsSystems.json", JSON.stringify(data));
});
