export {};
class Employees {
  empName: string;
  empId: string;
  empSal: number;

  constructor(empName: string, empId: string, empSal: number) {
    this.empName = empName;
    this.empId = empId;
    this.empSal = empSal;
  }

  displayDetails() {
    console.log("Employee Name: " + this.empName);
    console.log("Employee ID: " + this.empId);
    console.log("Employee Salary: " + this.empSal);
  }
}

let e1 = new Employees("Rohit", "Roh109", 12000);
e1.displayDetails();
let e2 = new Employees("Virat", "virr109", 12000);
e2.displayDetails();
