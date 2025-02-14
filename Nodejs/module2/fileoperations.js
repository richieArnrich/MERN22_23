const fs = require("node:fs");

function WriteIntoFile(filename, data) {
  fs.writeFileSync(filename, data);
  console.log("writing into " + filename + " completed");
}

function appendIntoFile(filename, data) {
  fs.appendFileSync(filename, data);
  console.log("appending into " + filename + " completed");
}

module.exports = { WriteIntoFile, appendIntoFile };
