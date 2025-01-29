function Me(request) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("I am not free now after 3 days, please dont ask me");
      reject(request);
    }, 3000);
  });
}

function success() {
  console.log(" Yeah.. I learnt js");
}

function failure() {
  console.log("I was not able to learn js");
}

function you() {
  let req = "Teach JS";
  let response = Me(req);
  response.then(success).catch(failure);
}

you();
