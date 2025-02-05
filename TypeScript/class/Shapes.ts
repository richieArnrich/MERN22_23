export {};

class Shapes {
  length: number;
  width: number;

  constructor(len: number, wid: number) {
    this.length = len;
    this.width = wid;
  }

  area(): number {
    return this.length * this.width;
  }
  perimeter(): number {
    return 2 * (this.length + this.width);
  }
}
let rect = new Shapes(10, 20);
console.log("Area of rectangle is ", rect.area());
console.log("Perimeter of rectangle is ", rect.perimeter());
let sq = new Shapes(10, 10);
console.log("Area of square is ", sq.area());
console.log("Perimeter of square is ", sq.perimeter());
