const fs = require("fs");
const round = require("lodash").round;

const ALLSystemsInfoRaw = JSON.parse(fs.readFileSync("ALLSystemsInfo.json"));

const ALLSystemsInAllConstelationsRaw = JSON.parse(
  fs.readFileSync("ALLSystemsInAllConstelations.json")
);

const ALLregionsAndItsConstellatiosRaw = JSON.parse(
  fs.readFileSync("ALLregionsAndItsConstellatios.json")
);

const ALLRegionsListRaw = JSON.parse(fs.readFileSync("ALLRegionsList.json"));

const ALLSystemsInfo = ALLSystemsInfoRaw.map(({ data }) => data).reduce(
  (list, obj) => {
    list.push(obj);
    return list;
  },
  []
);

const ALLSystemsInAllConstelations = ALLSystemsInAllConstelationsRaw.map(
  ({ data }) => data
).reduce((list, obj) => {
  list.push(obj);
  return list;
}, []);

const ALLregionsAndItsConstellatios = ALLregionsAndItsConstellatiosRaw.map(
  ({ data }) => data
).reduce((list, obj) => {
  list.push(obj);
  return list;
}, []);

const systemsWithSelectedProps = ALLSystemsInfo.reduce((systemList, system) => {
  const systemId = system.system_id;
  const stationList = [...(system.stations || [])];
  const stargatesList = [...(system.stargates || [])];
  const securityStatus = system.security_status;
  const systemName = system.name;
  const constelationId = system.constellation_id;
  const systemPosition = system.position;

  const constelationObj = ALLSystemsInAllConstelations.find(
    ({ constellation_id }) => constellation_id === system.constellation_id
  );

  const constelationName = constelationObj.name;
  const regionId = constelationObj.region_id;

  const regionObj = ALLregionsAndItsConstellatios.find(
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

fs.writeFileSync(
  "ALLSystemsSelectedProps.json",
  JSON.stringify(systemsWithSelectedProps)
);
