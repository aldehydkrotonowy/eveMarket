const fs = require("fs");

const ALLSystemsInfo0 = JSON.parse(fs.readFileSync("ALLSystemsInfo0.json"));
const ALLSystemsInfo1 = JSON.parse(fs.readFileSync("ALLSystemsInfo1.json"));
const ALLSystemsInfo2 = JSON.parse(fs.readFileSync("ALLSystemsInfo2.json"));
const ALLSystemsInfo3 = JSON.parse(fs.readFileSync("ALLSystemsInfo3.json"));
const ALLSystemsInfo4 = JSON.parse(fs.readFileSync("ALLSystemsInfo4.json"));

const AllSystemsList = [
  ...ALLSystemsInfo0,
  ...ALLSystemsInfo1,
  ...ALLSystemsInfo2,
  ...ALLSystemsInfo3,
  ...ALLSystemsInfo4,
];

fs.writeFileSync(`ALLSystemsInfo.json`, JSON.stringify(AllSystemsList));
