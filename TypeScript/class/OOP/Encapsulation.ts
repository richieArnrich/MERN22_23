class Car {
  private steering: string;
  private accelarator: number;
  private gear: number;

  constructor(steering: string, accelarator: number, gear: number) {
    this.steering = steering;
    this.accelarator = accelarator;
    this.gear = gear;
  }

  getSteering(): string {
    return this.steering;
  }
  setSteering(newdirection: string): void {
    this.steering = newdirection;
  }
  getAccleration(): number {
    return this.accelarator;
  }
  setAcceleration(newAcc: number): void {
    this.accelarator = newAcc;
  }
  getGear(): number {
    return this.gear;
  }
  setGear(newGear: number): void {
    this.gear = newGear;
  }
}

let c1 = new Car("Straight", 10, 1);
// console.log("Current steering: " + c1.steering);
console.log("current steering: " + c1.getSteering());
c1.setSteering("left");
console.log("current steering: " + c1.getSteering());

// Imply encapsulation for a class Employee, where the name is non-changeable, Empid is non-changeable
// phone is changeable and email is changeable