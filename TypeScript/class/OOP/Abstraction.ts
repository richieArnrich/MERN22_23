// Abstraction is the process of hiding the implementation and providing only the functionality
// that is needed by the user. This is done by creating an interface that defines the
// methods that can be called on an object, without revealing how those methods are
// implemented.
// It is implemented using abstract keyword for methods and classes
// abstract classes cannot by instantiated (create an object)
// abstract methods are methods with the method implementation (method body)
// abstract methods must be implemented by any non-abstract subclass
// Abstract classes can have implemented non-abstract methods
// abstract methods can only be present in an abstract class
abstract class CarGame {
  abstract goStraight(): void;
  abstract goReverse(): void;
  abstract goLeft(): void;
  abstract goRight(): void;
  abstract carJump(): void;
  abstract nitro(): void;

  playerDetails(): void {
    // non abstract aka concrete method
    console.log("Player Name: John Doe");
    console.log("Player Age: 25");
  }
}

class Forza extends CarGame {
  goStraight(): void {
    console.log("car is going straight");
  }
  goLeft(): void {
    console.log("car is going left");
  }
  goReverse(): void {
    console.log("car is going reverse");
  }
  goRight(): void {
    console.log("car is going right");
  }
  carJump(): void {
    console.log("car is jumping");
  }
  nitro(): void {
    console.log("car is using nitro");
  }
}

let g1 = new Forza();
g1.goStraight();
g1.playerDetails();
