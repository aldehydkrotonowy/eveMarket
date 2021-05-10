const fs = require("fs");

const ALLSystemsInfo0 = JSON.parse(fs.readFileSync("ALLSystemsInfo-chunk-0.json"));
const ALLSystemsInfo1 = JSON.parse(fs.readFileSync("ALLSystemsInfo-chunk-1.json"));
const ALLSystemsInfo2 = JSON.parse(fs.readFileSync("ALLSystemsInfo-chunk-2.json"));
const ALLSystemsInfo3 = JSON.parse(fs.readFileSync("ALLSystemsInfo-chunk-3.json"));
const ALLSystemsInfo4 = JSON.parse(fs.readFileSync("ALLSystemsInfo-chunk-4.json"));

const AllSystemsList = [
  ...ALLSystemsInfo0,
  ...ALLSystemsInfo1,
  ...ALLSystemsInfo2,
  ...ALLSystemsInfo3,
  ...ALLSystemsInfo4,
];

fs.writeFileSync(`ALLSystemsInfo.json`, JSON.stringify(AllSystemsList));
