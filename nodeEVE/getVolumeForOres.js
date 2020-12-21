const axios = require("axios");
const fs = require("fs");
const path = require("path");

const server = `https://esi.evetech.net`;
const version = `latest`;
const datasource = `datasource=tranquility`;
const language = `language=en-us`;

const directoryPath = path.join(
  __dirname,
  "../src/assets/newEdenBaseData/inventory/parts/materials/standardOres"
);
console.log(directoryPath);

fs.readdir(directoryPath, function (err, files) {
  //handling error
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  //listing all files using forEach
  files.forEach(function (file) {
    // Do whatever you want to do with the file
    const fileContent = fs.readFileSync(path.join(directoryPath, file));

    console.log(fileContent);
  });
});
