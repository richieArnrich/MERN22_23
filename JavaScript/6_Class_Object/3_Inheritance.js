class Parent {
  house() {
    document.write("Parent owns a house<br>");
  }

  land() {
    document.write("Parent owns a 100 acre land<br>");
  }
}

class Child extends Parent {
  flats() {
    document.write("Child owns a flat<br>");
  }
}

let c1 = new Child();
c1.house();
c1.land();
c1.flats();

let p1 = new Parent();
p1.house();
p1.land();
// p1.flats(); parent object cannot access child attributes
