const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes.js");
const app = express();
// all communication happens with json
app.use(express.json());

const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/UserManagement");
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Error while connecting: ", err);
  }
};

app.get("/", (req, res) => {
  res.status(200).json({ message: "API working" });
});

app.use("/users", userRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  connect();
  console.log(`Server is running on port http://localhost:${PORT}`);
});
