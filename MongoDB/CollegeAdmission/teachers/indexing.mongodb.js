use("CollegeAdmission");

// create index
db.teachers.createIndex({ name: 1 });

// get data according to index
db.teachers.find({ name: "John Doe" }).explain("executionStats");
