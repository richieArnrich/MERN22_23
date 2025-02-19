const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes.js");
const path = require("path");

const app = express();
// all communication happens with json
app.use(express.json());

// set ejs engine
app.set("view engine", "ejs");
app.use(express.static("public"));
// set path of index.ejs
app.set("views", path.join(__dirname, "views"));

const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/UserManagement");
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Error while connecting: ", err);
  }
};

app.get("/", (req, res) => {
  // modify to render ejs file
  res.render("index");
});

app.use("/users", userRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  connect();
  console.log(`Server is running on port http://localhost:${PORT}`);
});
