debugger;
// functions declared using function keyword and given given function declaration are stored in
// which scope of the brwoser?
function aaamyfunc1() {
  let aaamyname = "Shankar";
  document.write(`${aaamyname} in the function()<br>`);
  for (let aai = 0; aai < 3; aai++) {
    document.write(`${aai} in the loop<br>`);
    document.write(`${aaamyname}in the loop<br>`);
  }
  //   document.write(`${aai} out of the loop`); not accessible
}

aaamyfunc1();
// document.write(`${aaamyname} out of the function()`);
document.write(`${aai} out of the function()`);
