const fs = require("fs");
const round = require("lodash").round;

const rawdataRegionsList = fs.readFileSync("regionsList.json");
const jsonRegionsList = JSON.parse(rawdataRegionsList);

const rawdataRegionsAndItsConstellatios = fs.readFileSync(
  "regionsAndItsConstellatios.json"
);
const jsonRegionsAndItsConstellatios = JSON.parse(
  rawdataRegionsAndItsConstellatios
);

const rawdataConstellationsAndItsSystems = fs.readFileSync(
  "constelationsAndItsSystems.json"
);
const jsonConstellationsAndItsSystems = JSON.parse(
  rawdataConstellationsAndItsSystems
);

const rawdataSystems = fs.readFileSync("systemsListDetails.json");
const jsonSystems = JSON.parse(rawdataSystems);

const systems = jsonSystems.reduce((systemList, system) => {
  const systemId = system.system_id;
  const stationList = [...(system.stations || [])];
  const stargatesList = [...(system.stargates || [])];
  const securityStatus = system.security_status;
  const systemName = system.name;
  const constelationId = system.constellation_id;
  const systemPosition = system.position;

  const constelationObj = jsonConstellationsAndItsSystems.find(
    ({ constellation_id }) => constellation_id === system.constellation_id
  );

  const constelationName = constelationObj.name;
  const regionId = constelationObj.region_id;

  const regionObj = jsonRegionsAndItsConstellatios.find(
    ({ region_id }) => region_id === constelationObj.region_id
  );
  const regionName = regionObj.name;

  const result = {
    systemId,
    stationList,
    stargatesList,
    securityStatus,
    systemName,
    constelationId,
    systemPosition,
    constelationName,
    regionId,
    regionName,
  };

  systemList.push(result);
  return systemList;
}, []);

fs.writeFileSync("systems.json", JSON.stringify(systems));

const safeSystems = systems.filter(
  ({ securityStatus }) => round(securityStatus, 2) >= 0.4
);

fs.writeFileSync("systemsSecAbove0.4.json", JSON.stringify(safeSystems));
