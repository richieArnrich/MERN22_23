class Person {
  name;
  age;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  Work() {
    document.write(`${this.name} works 90 hours a week haha😂😂😂`);
  }
}

class Employee extends Person {
  address;
  contact;
  salary;

  constructor(name, age, address, contact, salary) {
    super(name, age); // super call statement always in first line in constructors
    this.address = address;
    this.contact = contact;
    this.salary = salary;
  }

  displayDetails() {
    document.write(` <br> Name is: ${this.name} <br>`);
    document.write(`Age is: ${this.age}  <br>`);
    document.write(`Address is: ${this.address}  <br>`);
    document.write(`Contact is: ${this.contact} <br>`);
    document.write(`Salary is: ${this.salary} <br>`);
    super.Work();
  }
}

let e1 = new Employee("Sumit", 25, "Jaynagar", 123457, 1222);
e1.displayDetails();
let e2 = new Employee("Rohan", 26, "HK layout", 12222, 1111);
e2.displayDetails();
