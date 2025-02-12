// write an aggregation function to display the details of dept_04
use("CollegeAdmission");

db.departments.aggregate([
  {
    $match: {
      _id: "Dept_04",
    },
  },
  {
    $project: {
      dept_name: 1, //means that the project function is of exclusion projection
      dept_head: 1, // you are telling what fields are excluded in the output..
    },
  },
]);
