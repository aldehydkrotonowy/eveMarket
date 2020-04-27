import axios from "axios";

const server = `https://esi.evetech.net`;
const version = `latest`;
const datasource = `datasource=tranquility`;
const language = `language=en-us`;

export const url_selector = {
  TYPE_ID_LIST: "typesIdsList",
  OBJECT_CHARACTERISTICS: "objectCharacteristic",
  SYSTEMS_IDS_LIST: "systemsIdsList",
  REGIONS_IDS_LIST: "regionsIdsList",
  CONSTELATIONS_IDS_LIST: "constelationsIdsList",
};

const urlSelector = (what, param) => {
  const pref = `${server}/${version}`;
  const dsl = `${datasource}&${language}`;
  const uni = `${pref}/universe`;

  switch (what) {
    case url_selector.TYPE_ID_LIST:
      const page = param;
      return `${uni}/types/?${dsl}&page=${page}`;
    case url_selector.SYSTEMS_IDS_LIST:
      return `${uni}/systems/?${dsl}`;
    case url_selector.OBJECT_CHARACTERISTICS:
      const type_id = param;
      return `${uni}/types/${type_id}?${dsl}`;
    case url_selector.REGIONS_IDS_LIST:
      return `${uni}/regions/?${dsl}`;
    case url_selector.CONSTELATIONS_IDS_LIST:
      return `${uni}/constellations/?${dsl}`;
    default:
      return "";
  }
};

export const fetchData = async (selector, param) => {
  const url = urlSelector(selector, param);
  if (!url) return;
  return axios.get(url).then(({ data }) => data);
};

export const fetchDataRecursive = async (urlList, result) => {
  let previousResults = [...result];

  if (!urlList.length)
    return await new Promise((resolve) => resolve(previousResults));

  const prepareUrls = (urls) => {
    const regionInfoPromises = [];
    urls.forEach((url) => {
      const promise = axios.get(url);
      regionInfoPromises.push(
        new Promise((resolve) => {
          promise
            .then(({ data }) => resolve({ success: true, data }))
            .catch(() => resolve({ success: false, data: null, url }));
        })
      );
    });
    return regionInfoPromises;
  };

  const promises = prepareUrls(urlList);

  return Promise.all(promises).then(async (values) => {
    const badRequests = values.filter(({ success }) => !success);
    const succesfulRequests = values.filter(({ success }) => success);

    const faildUrls = badRequests.map(({ url }) => url);
    previousResults = previousResults.concat(succesfulRequests);

    console.log("raport", {
      urlList: urlList.length,
      succesfulRequests: succesfulRequests.length,
      badRequests,
      previousResults: previousResults.length,
    });

    return await fetchDataRecursive(faildUrls, previousResults);
  });
};
