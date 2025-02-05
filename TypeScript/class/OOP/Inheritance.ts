// the process of the child acquring the properties 
// of the super class is called as
// inheritance
class Person {
  name: string;
  age: number;

  constructor(n: string, ag: number) {
    this.name = n;
    this.age = ag;
  }
}

class Student extends Person {
  rollNo: number;
  school: string;

  constructor(n: string, ag: number, roll: number, sch: string) {
    super(n, ag);
    this.rollNo = roll;
    this.school = sch;
  }

  displayStudent() {
    console.log("Name: ", this.name);
    console.log("Age: ", this.age);
    console.log("Roll No: ", this.rollNo);
    console.log("School: ", this.school);
  }
}

let s1 = new Student("Kamal", 10, 14, "Abc School");
s1.displayStudent();
