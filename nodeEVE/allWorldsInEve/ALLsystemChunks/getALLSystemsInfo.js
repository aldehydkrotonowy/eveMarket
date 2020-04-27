const axios = require("axios");
const fs = require("fs");

const server = `https://esi.evetech.net`;
const version = `latest`;
const datasource = `datasource=tranquility`;
const language = `language=en-us`;

// const rawdataSystemList = fs.readFileSync("ALLSystemsInAllConstelations.json");
// const jsonSystemList = JSON.parse(rawdataSystemList);

// const systemsIdList = jsonSystemList
//   .map(({ data }) => data)
//   .reduce((systemIds, { systems }) => {
//     systemIds = [...systemIds, ...systems];
//     return systemIds;
//   }, []);

// let initUrlList = systemsIdList.reduce((acc, systemId) => {
//   const url = `${server}/${version}/universe/systems/${systemId}/?${datasource}&${language}`;
//   acc.push(url);
//   return acc;
// }, []);

// console.log({ urls: initUrlList.length });

const initUrlList = JSON.parse(fs.readFileSync("4.json"));

const fetchData2 = async (urlList, result) => {
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

    return await fetchData2(faildUrls, previousResults);
  });
};

fetchData2(initUrlList, []).then((data) => {
  fs.writeFileSync("ALLSystemsInfo4.json", JSON.stringify(data));
});
