use("CollegeAdmission"); //name of database - follow pascal case

// fetch all teachers
// db.teachers.find();

// fetch the details of the teacher with id teacher_04
// db.teachers.findOne({ _id: "teacher_04" });

// update the city of teacher_04
db.teachers.updateOne(
  { _id: "teacher_04" },
  {
    $set: {
      "address.city": "Hazrath Nizamuddin",
    },
  }
);
