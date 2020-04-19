const axios = require("axios");
const fs = require("fs");

const constelationsInfoURL = "/universe/constellations/{constellation_id}/";
const regionInfoURL = "/universe/regions/{region_id}/";

//regions -> constelations -> systems
const rawdataRegionsList = fs.readFileSync("regionsList.json");
const regionsList = JSON.parse(rawdataRegionsList);

const regionIdList = regionsList.regions.map(({ id }) => id);

// fs.writeFileSync('student-2.json', data);
// console.log(regionIdList);
let regionInfoPromises = [];

regionIdList.forEach((regionId) => {
  const promise = axios.get(
    `${server}/${version}/universe/regions/10000069/?${datasource}&${language}`
  );
  regionInfoPromises.push(promise);
});

Promise.all(regionInfoPromises).then((values) => {
  const data = values.map(({ data }) => data);
  console.log(data);
});
