const { WriteIntoFile, appendIntoFile } = require("./fileoperations.js");

const filename = "LionAndMouse.txt";
const data = `Once upon a time, a lion was sleeping in a forest.`;

console.log("call write into file");
// WriteIntoFile(filename, data);

appendIntoFile(filename, data);
