"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calculation = /** @class */ (function () {
    function Calculation() {
    }
    Calculation.prototype.add = function (a, b) {
        return a + b;
    };
    Calculation.prototype.add1 = function (a, b, c) {
        return a + b + c;
    };
    return Calculation;
}());
var c1 = new Calculation();
console.log(c1.add(10, 20)); // 30
console.log(c1.add(10, "20")); // "1020"
console.log(c1.add1(10, 20, 30)); //60
