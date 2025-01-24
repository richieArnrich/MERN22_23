// define a global scope variable
debugger;
let aaglobalVar = 100;

let aaaGV = 500;
function access1() {
  // access the global scope variable
  document.write(`${aaglobalVar} in access() <br>`);
  document.write(`${aaaGV} in access() <br>`);
}

access1();
document.write(`${aaglobalVar} out of access() <br>`);
document.write(`${aaaGV} out of access() <br>`);
