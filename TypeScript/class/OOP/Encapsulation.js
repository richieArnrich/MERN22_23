var Car = /** @class */ (function () {
    function Car(steering, accelarator, gear) {
        this.steering = steering;
        this.accelarator = accelarator;
        this.gear = gear;
    }
    Car.prototype.getSteering = function () {
        return this.steering;
    };
    Car.prototype.setSteering = function (newdirection) {
        this.steering = newdirection;
    };
    return Car;
}());
var c1 = new Car("Straight", 10, 1);
// console.log("Current steering: " + c1.steering);
console.log("current steering: " + c1.getSteering());
c1.setSteering("left");
console.log("current steering: " + c1.getSteering());
