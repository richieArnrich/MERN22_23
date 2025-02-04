// what is return type?
// return type is the type of the value that a function returns
function add(a: number, b: number): number {
  return a + b; //mention the return type
}

function returnName(name: string): string {
  let r: string = "My name is " + name;
  return r;
}

// what is void?
// void is the return type of a function that does not return any value
function returnVoid(a: number, b: number): void {
  let r = a + b;
  console.log(r);
  return; //control transfer statement , which transfers the controller from the called function
  //    to the function call statement
}

function returnAny(a: any, b: any): any {
  return a + b;
}

function returnObj(name: string, age: number): object {
  let obj = {
    name: name,
    age: age,
  };
  return obj;
}

returnVoid(10, 23);

console.log(returnName("Sachin"));

console.log(returnAny(10, 20));
console.log(returnAny("Hello", "Bangalore"));

console.log(returnObj("Sachin", 50));
