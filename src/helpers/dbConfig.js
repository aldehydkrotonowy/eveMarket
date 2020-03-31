import { url_selector, fetchData } from "./api";

const getTypeIds = async (storeName, inLineKeyPath) => {
  const fetchAndConcatChunks = async (page, idsList) => {
    const idsChunk = await fetchData(url_selector.TYPE_ID_LIST, page);
    if (idsChunk.length === 0) return idsList;
    return fetchAndConcatChunks(++page, idsList.concat(idsChunk));
  };

  const firstPage = 1;
  const listOfTypeIds = await fetchAndConcatChunks(firstPage, []);
  return { storeName, data: listOfTypeIds, inLineKeyPath };
};

const getSystemsIds = async (storeName, inLineKeyPath) => {
  const systemIds = await fetchData(url_selector.SYSTEMS_IDS_LIST);
  return { storeName, data: systemIds, inLineKeyPath };
};

const getRegionsIds = async (storeName, inLineKeyPath) => {
  const regionsIds = await fetchData(url_selector.REGIONS_IDS_LIST);
  return { storeName, data: regionsIds, inLineKeyPath };
};

const getConstelationsIds = async (storeName, inLineKeyPath) => {
  const constelationsIds = await fetchData(url_selector.CONSTELATIONS_IDS_LIST);
  return { storeName, data: constelationsIds, inLineKeyPath };
};

export const dbConfig = {
  dbName: "EVE_ONLINE_DB",
  version: 2,
  stores: [
    {
      contains: "ids",
      name: "eveUniversTypeList",
      inLineKeyPath: false,
      storeOpts: {},
      indexes: [],
      dataFetchCallback: getTypeIds
    },
    {
      contains: "ids",
      name: "eveUniversSystemsIdsList",
      inLineKeyPath: false,
      storeOpts: {
        /*  keyPath: "system_id", autoIncrement: true */
      },
      indexes: [
        /* { name: "system_id", property: "system_id", unique: true } */
      ],
      dataFetchCallback: getSystemsIds
    },
    {
      contains: "ids",
      name: "eveUniverseRegionsIdsList",
      inLineKeyPath: false,
      storeOpts: {},
      indexes: [],
      dataFetchCallback: getRegionsIds
    },
    {
      contains: "ids",
      name: "eveUniverseConstelationsIdsList",
      inLineKeyPath: false,
      storeOpts: {},
      indexes: [],
      dataFetchCallback: getConstelationsIds
    }
  ]
};
