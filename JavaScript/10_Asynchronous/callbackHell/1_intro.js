function add(a, b, cb) {
  setTimeout(() => {
    let r = a + b; //15
    cb(r, 7);
  }, 3000);
}

add(10, 5, (addResult, c) => {
  let r = addResult - c;
  console.log("final result ", r);
});
