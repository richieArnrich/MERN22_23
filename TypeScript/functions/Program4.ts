// object destructuring
// it is the process of converting the object attributes into its constituent variables
// it is used to create new variables from the existing object

const obj = {
  firstName: "Rohit",
  lastName: "Kumar",
  age: 25,
  gender: "male",
  address: {
    street: "123, main street",
    city: "Delhi",
    state: "Delhi",
    country: "India",
  },
};

const { firstName, lastName, age, gender } = obj;
console.log(firstName, lastName, age, gender); // Rohit Kumar 25
const { street, city, state, country } = obj.address;
console.log("Address= ", street, city, state, country); // 123, main street Delhi Delhi India
console.log(`Address = ${street}, ${city}`); // template literals
