export {};
function add(a: number, b: number) {
  let r = a + b;
  console.log(r);
}

add(100, 200); //300
function join(a: any, b: any) {
  let r = a + b;
  console.log(r);
}

function join2(a: any, b: any, c: any, d: any) {
  let r1 = a + b + c + d;
  console.log(r1);
  let r2 = a - b + (c - d);
  console.log(r2);
}

join(100, 100); //200
join(251, "251");
join2(100, 200, "351", 400);

console.log("-----------------------");
let obj1: object = {
  name: "John",
  age: 25,
};

let obj2: object = obj1;

console.log(obj1 == obj2);
console.log(obj1 === obj2);
console.log("-------------------");
let obj3: object = {
  name: "John",
  age: 25,
};
console.log(obj1 == obj3); // equality operator
console.log(obj1 === obj3); // strictly equal operator
