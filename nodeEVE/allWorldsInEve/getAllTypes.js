

const axios = require("axios");
const isEmpty = require("lodash").isEmpty;
const pick = require("lodash").pick;
const fs = require("fs");

const server = `https://esi.evetech.net`;
const version = `latest`;
const datasource = `datasource=tranquility`;
const language = `language=en-us`;


const pages = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41];

const allPromises = [];

pages.forEach((page) => {
  // const url = https://esi.evetech.net/latest/universe/types/?datasource=tranquility&page=18
  const url = `${server}/${version}/universe/types/?${datasource}&page=${page}`
  const promise = axios.get(url);
  allPromises.push(promise);
});

console.log('all promises', allPromises.length);

Promise.all(allPromises).then(arrayOfChunks => {
  console.log(arrayOfChunks.length);
  arrayOfChunks.map(response => console.log(response.status));
  
  arrayOfChunks
  .map(({ data }, index) => ({chunk:data, page: index+1}))
  .map(({chunk, page}) => {
    fs.writeFileSync(`./AllTypesChunks/universe_types_ids_chunk_${page}.json`, JSON.stringify(chunk))
  })  
})