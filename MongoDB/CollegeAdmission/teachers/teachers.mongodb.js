use("CollegeAdmission"); //name of database - follow pascal case

// create a collection
db.createCollection("teachers"); // create a collection - follow small letters

// insert one data into teachers collection
// db.teachers.insertOne({
//   _id: "teacher_01",
//   name: "Sophy John",
//   age: 30,
//   subject: ["Chemistry", "Mathematics", "Physics"],
//   salary: 50000,
//   address: {
//     street: "123, Main Street",
//     city: "Bangalore",
//     state: "Karnataka",
//     country: "India",
//     zipcode: "560030",
//   },
// });

// insert multiple data into teachers collection
// db.teachers.insertMany([
//   {
//     _id: "teacher_02",
//     name: "John Doe",
//     age: 35,
//     subject: ["Chemistry", "Mathematics"],
//     salary: 60000,
//     address: {
//       street: "456, Main Street",
//       city: "Bangalore",
//       state: "Karnataka",
//       country: "India",
//       zipcode: "560120",
//     },
//   },
//   {
//     _id: "teacher_03",
//     name: "Suresh",
//     age: 40,
//     subject: ["Physics", "Mathematics"],
//     salary: 70000,
//     address: {
//       street: "789, Main Street",
//       city: "Bangalore",
//       state: "Karnataka",
//       country: "India",
//       zipcode: "560090",
//     },
//   },
//   {
//     _id: "teacher_04",
//     name: "Jayatheertha",
//     age: 45,
//     subject: ["Mathematics", "Physics"],
//     salary: 80000,
//     address: {
//       street: "321, Main Street",
//       city: "Delhi",
//       state: "Delhi",
//       country: "India",
//       zipcode: "560010",
//     },
//   },
//   {
//     _id: "teacher_05",
//     name: "Rajesh",
//     age: 50,
//     subject: ["Chemistry", "Biology"],
//     salary: 90000,
//     address: {
//       street: "456, Main Street",
//       city: "Mumbai",
//       state: "Maharashtra",
//       country: "India",
//       zipcode: "560010",
//     },
//   },
// ]);
