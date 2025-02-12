use("CollegeAdmission");

db.createCollection("departments");

// db.departments.insertOne({
//   _id: "Dept_01",
//   dept_name: "Mathematics",
//   dept_head: "teacher_04",
// });

// db.departments.insertMany([
//   {
//     _id: "Dept_02",
//     dept_name: "Biology",
//     dept_head: "teacher_05",
//   },
//   {
//     _id: "Dept_03",
//     dept_name: "Chemistry",
//     dept_head: "teacher_01",
//   },
//   {
//     _id: "Dept_04",
//     dept_name: "Physics",
//     dept_head: "teacher_03",
//   },
// ]);

db.departments.find();
