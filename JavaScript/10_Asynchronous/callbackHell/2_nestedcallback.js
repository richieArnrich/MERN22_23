// nested callback

function add(a, b, cb) {
  setTimeout(() => {
    let r = a + b;
    // console.log("Add result  = ", r);
    cb(r);
  }, 2000);
}

function sub(addresult, c, cb) {
  setTimeout(() => {
    let r = addresult - c; //final output
    cb(r);
  }, 2000);
}

function multiply(subresult, d, cb) {
  setTimeout(() => {
    let r = subresult * d;
    cb(r);
  }, 2000);
}

add(25, 8, (addresult) => {
  sub(addresult, 5, (subresult) => {
    multiply(subresult, 2, (mulresult) => {
      console.log("Final result = " + mulresult);
    });
  });
});
