function sum(a, b) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (typeof a === "number" && typeof b === "number") {
        resolve(a + b);
      } else {
        reject("Error: Both inputs must be numbers");
      }
    }, 1000);
  });
}

function multiply(addresult) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (typeof addresult === "number") {
        resolve(addresult * 2);
      } else {
        reject("Error: Input must be a number");
      }
    }, 1000);
  });
}

function displayResult(res) {
  console.log(res);
}
sum("10", 20)
  .then(multiply)
  .then(displayResult)
  .catch((err) => {
    console.log(err);
  });
