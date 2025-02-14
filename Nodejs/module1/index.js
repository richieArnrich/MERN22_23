// const { add, sub } = require("./calculation.js"); only works in common js files
import { add, sub } from "./calculation.js";

let sum = add(3, 7);
let diff = sub(7, 3);

console.log("add : ", sum);
console.log("sub : ", diff);
