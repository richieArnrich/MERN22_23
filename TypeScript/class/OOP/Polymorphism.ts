export {};
class Calculation {
  add(a: number, b: number): number;
  add(a: number, b: string): string; // overloaded function
  add(a: any, b: any): any {
    return a + b;
  }

  add1(a: number, b: number, c: number): number;
  add1(a: number, b: string, c: number): string;
  add1(a: any, b: any, c: any): any {
    return a + b + c;
  }
}

let c1 = new Calculation();
// two parameters
console.log(c1.add(10, 20)); // 30
console.log(c1.add(10, "20")); // "1020"
// three parameters
console.log(c1.add1(10, 20, 30)); //60
