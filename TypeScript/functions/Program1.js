"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    var r = a + b;
    console.log(r);
}
add(100, 200); //300
function join(a, b) {
    var r = a + b;
    console.log(r);
}
function join2(a, b, c, d) {
    var r1 = a + b + c + d;
    console.log(r1);
    var r2 = a - b + (c - d);
    console.log(r2);
}
join(100, 100); //200
join(251, "251");
join2(100, 200, "351", 400);
console.log("-----------------------");
var obj1 = {
    name: "John",
    age: 25,
};
var obj2 = obj1;
console.log(obj1 == obj2);
console.log(obj1 === obj2);
console.log("-------------------");
var obj3 = {
    name: "John",
    age: 25,
};
console.log(obj1 == obj3);
console.log(obj1 === obj3);
