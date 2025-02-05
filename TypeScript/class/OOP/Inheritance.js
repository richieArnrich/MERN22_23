var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// the process of the child acquring the properties of the super class is called as
// inheritance
var Person = /** @class */ (function () {
    function Person(n, ag) {
        this.name = n;
        this.age = ag;
    }
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(n, ag, roll, sch) {
        var _this = _super.call(this, n, ag) || this;
        _this.rollNo = roll;
        _this.school = sch;
        return _this;
    }
    Student.prototype.displayStudent = function () {
        console.log("Name: ", this.name);
        console.log("Age: ", this.age);
        console.log("Roll No: ", this.rollNo);
        console.log("School: ", this.school);
    };
    return Student;
}(Person));
var s1 = new Student("Kamal", 10, 14, "Abc School");
s1.displayStudent();
