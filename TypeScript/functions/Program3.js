// array destructuring
// the process of converting an array into its constituent elements
// it is a shorthand way of creating variables from an array
// it is used to assign values from an array to variables in a more readable way
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var arr = [
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
var a = arr[0], b = arr[1], c = arr[2], d = arr[3], e = arr[4], f = arr[5], g = arr[6];
console.log(a); //Mango
console.log(b); //Apple
console.log(c); //Banana
console.log(d); //Watermelon
console.log(e); //Muskmelon
console.log("----------------------------------");
// rest operator
// it is used to assign the remaining elements of an array to a variable
// it is written on the LHS of = sign
var fruits = [
    "Mangoes",
    "Apples",
    "Bananas",
    "Watermelon",
    "Muskmelon",
    "Blueberrys",
    "Strawberrys",
];
var bask1 = fruits[0], bask2 = fruits[1], bask3 = fruits.slice(2);
console.log(bask1);
console.log(bask2);
// basket 3 should take up the rest of the fruits
console.log(bask3);
console.log("-----------------------------------------");
// array restructuring
// it is used to assign values from an array to variables in a different order
// it is used to swap values of two variables
// use the spread operator
var basket1 = ["Apples", "Bananas", "Oranges"];
var basket2 = ["Carror", "Brinjal", "Tomatoe", "Spinach"];
// basket1 and basket2 are two arrays
var bigBasket = __spreadArray(__spreadArray([], basket1, true), basket2, true);
console.log(bigBasket);
