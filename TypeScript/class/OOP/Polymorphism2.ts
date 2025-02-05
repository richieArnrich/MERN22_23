// Method overriding:
//   - A subclass can provide a different implementation of a method that is already
// provided by its superclass
//   - The method in the subclass has the same name, return type, and parameter list as
//     the method in the superclass, but it can have a different body
//   - The method in the superclass is called the "overridden" method, and the method

class Parent {
  house() {
    console.log("Parent builds the house in cream color");
  }
  bike() {
    console.log("Parent has a blue color bike");
  }
}

class Child extends Parent {
  house() {
    console.log("Child repaints it to light orange");
  }
}

let child1 = new Child();
child1.house();
child1.bike();
