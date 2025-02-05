// object destructuring
// it is the process of converting the object attributes into its constituent variables
// it is used to create new variables from the existing object
var obj = {
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
var firstName = obj.firstName, lastName = obj.lastName, age = obj.age, gender = obj.gender;
console.log(firstName, lastName, age, gender); // Rohit Kumar 25
var _a = obj.address, street = _a.street, city = _a.city, state = _a.state, country = _a.country;
console.log("Address= ", street, city, state, country); // 123, main street Delhi Delhi India
