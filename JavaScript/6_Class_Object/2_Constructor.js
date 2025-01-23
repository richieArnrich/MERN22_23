class Car {
  color;
  model;
  year;
  manufacturer;

  constructor(col, mod, yr, manuf) {
    this.color = col;
    this.model = mod;
    this.year = yr;
    this.manufacturer = manuf;
  }

  start() {
    // function declaration
    document.write(this.model + " started<br>");
  }

  accelarate() {
    document.write(this.model + " accelarating<br>");
  }

  break() {
    document.write(this.model + " breaking<br>");
  }

  stop() {
    document.write(this.model + " stopped<br>");
  }

  details() {
    document.write(`Color : ${this.color} <br>`);
    document.write(`Model : ${this.model} <br>`);
    document.write(`Year : ${this.year} <br>`);
    document.write(`Manufacturer : ${this.manufacturer} <br>`);
    document.write(`<br>--------------------------------------<br>`);
  }
}

let swift = new Car("Red", "Swift 2012", "2012", "Maruthi Suzuki");
swift.start();
swift.accelarate();
swift.break();
swift.stop();
swift.details();
// variable scopes and function scopes
// DOM and BOM