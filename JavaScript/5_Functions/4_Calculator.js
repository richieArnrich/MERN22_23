function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

let choice = window.prompt("Enter your choice; 1: Add 2: Sub 3: Multiply");
choice = parseInt(choice);

switch (choice) {
  case 1:
    {
      let a = parseInt(window.prompt("Enter first number"));
      let b = parseInt(window.prompt("Enter second number"));
      let result = add(a, b);
      document.write(`Add of ${a} and ${b} is ${result} <br>`);
    }
    break;
  case 2:
    {
      let a = parseInt(window.prompt("Enter first number"));
      let b = parseInt(window.prompt("Enter second number"));
      let result = sub(a, b);
      document.write(`Sub of ${a} and ${b} is ${result} <br>`);
    }
    break;
  case 3: {
    let a = parseInt(window.prompt("Enter first number"));
    let b = parseInt(window.prompt("Enter second number"));
    let result = multiply(a, b);
    document.write(`Multiply of ${a} and ${b} is ${result} <br>`);
  }
}
