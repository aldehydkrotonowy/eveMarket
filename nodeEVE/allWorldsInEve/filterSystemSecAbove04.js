const fs = require("fs");
const round = require("lodash").round;

const allSystemsList = JSON.parse(fs.readFileSync("ALLSystemsInfo.json"));

const secAbove04 = allSystemsList
  .map(({ data }) => data)
  .filter(({ security_status }) => round(security_status, 2) >= 0.4);

fs.writeFileSync("filteredSystemsSecAbove0.4.json", JSON.stringify(secAbove04));
