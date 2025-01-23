class Car {
  color;
  model;
  year;
  manufacturer;

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

let swift = new Car();
swift.color = "Red";
swift.model = "Swift Dezire 2012";
swift.year = 2012;
swift.manufacturer = "Maruti Suzuki";

swift.start();
swift.accelarate();
swift.break();
swift.stop();
swift.details();

let polo = new Car();
polo.color = "White";
polo.model = "VW POLO 2015";
polo.year = "2015";
polo.manufacturer = "Volkswagen";

polo.start();
polo.accelarate();
polo.break();
polo.stop();
polo.details();
