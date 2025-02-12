use("CollegeAdmission");

db.createCollection("students");

// db.students.insertOne({
//   _id: "stu_01",
//   name: "Anil Kumar",
//   age: 20,
//   city: "Bangalore",
//   class: "11",
//   section: "A",
//   class_teacher: "teacher_01",
//   subjects: ["Mathematics", "Physics", "Chemistry", "Biology"],
// });

// db.students.insertMany([
//   {
//     _id: "stu_02",
//     name: "Rahul Kumar",
//     age: 21,
//     city: "Mumbai",
//     class: "11",
//     section: "A",
//     class_teacher: "teacher_01",
//     subjects: ["Mathematics", "Physics", "Chemistry", "Biology"],
//   },
//   {
//     _id: "stu_03",
//     name: "Rohan Kumar",
//     age: 22,
//     city: "Delhi",
//     class: "11",
//     section: "B",
//     class_teacher: "teacher_02",
//     subjects: ["Mathematics", "Physics", "Chemistry"],
//   },
//   {
//     _id: "stu_04",
//     name: "Sunil Kumar",
//     age: 23,
//     city: "Chennai",
//     class: "11",
//     section: "B",
//     class_teacher: "teacher_02",
//     subjects: ["Mathematics", "Physics", "Chemistry"],
//   },
//   {
//     _id: "stu_05",
//     name: "Suresh Kumar",
//     age: 23,
//     city: "Kolkata",
//     class: "12",
//     section: "A",
//     class_teacher: "teacher_03",
//     subjects: ["Mathematics", "Physics", "Chemistry", "Biology"],
//   },
//   {
//     _id: "stu_06",
//     name: "Sahil Abbas",
//     age: 22,
//     city: "Mumbai",
//     class: "12",
//     section: "A",
//     class_teacher: "teacher_03",
//     subjects: ["Mathematics", "Physics", "Chemistry", "Biology"],
//   },
// ]);

// db.students.insertOne({
//   _id: "stu_07",
//   name: "To be deleted",
//   age: 22,
//   city: "Delhi",
// });

db.students.deleteOne({ _id: "stu_07" });

db.students.find();
