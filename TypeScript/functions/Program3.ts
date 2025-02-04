// array destructuring
// the process of converting an array into its constituent elements
// it is a shorthand way of creating variables from an array
// it is used to assign values from an array to variables in a more readable way

let arr = [
  "Mango",
  "Apple",
  "Banana",
  "Watermelon",
  "Muskmelon",
  "Apple",
  "Apple",
];
console.log(arr[2]);
console.log(arr[4]);

let [a, b, c, d, e, f, g] = arr;
console.log(a); //Mango
console.log(b); //Apple
console.log(c); //Banana
console.log(d); //Watermelon
console.log(e); //Muskmelon
console.log("----------------------------------");
// rest operator
// it is used to assign the remaining elements of an array to a variable
// it is written on the LHS of = sign
let fruits = [
  "Mangoes",
  "Apples",
  "Bananas",
  "Watermelon",
  "Muskmelon",
  "Blueberrys",
  "Strawberrys",
];
let [bask1, bask2, ...bask3] = fruits;
console.log(bask1);
console.log(bask2);
// basket 3 should take up the rest of the fruits
console.log(bask3);
console.log("-----------------------------------------");
// array restructuring
// it is used to assign values from an array to variables in a different order
// it is used to swap values of two variables
// use the spread operator
let basket1 = ["Apples", "Bananas", "Oranges"];
let basket2 = ["Carrot", "Brinjal", "Tomatoe", "Spinach"];
// basket1 and basket2 are two arrays
let bigBasket = [...basket1, ...basket2];
console.log(bigBasket);
