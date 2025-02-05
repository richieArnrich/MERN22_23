"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shapes = /** @class */ (function () {
    function Shapes(len, wid) {
        this.length = len;
        this.width = wid;
    }
    Shapes.prototype.area = function () {
        return this.length * this.width;
    };
    Shapes.prototype.perimeter = function () {
        return 2 * (this.length + this.width);
    };
    return Shapes;
}());
var rect = new Shapes(10, 20);
console.log("Area of rectangle is ", rect.area());
console.log("Perimeter of rectangle is ", rect.perimeter());
