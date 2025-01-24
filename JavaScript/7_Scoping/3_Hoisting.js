// hoisting: process where a variable is accessed before its initialisation
// this is a runtime error
// debugger;
"use strict";
console.log(aaa);

var aaa = 100;
console.log(aaa);
