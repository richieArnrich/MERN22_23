const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
const jwt = require("jsonwebtoken");
const userSchema = require("../models/users.js");

// create a jwt secret key
const secretKey = "qwerty@123";

router.post("/createUser", async (req, res) => {
  console.log(req.body);
  const { username, email, password, address, contact, gender } = req.body;
  //   hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const newUser = {
      username,
      email,
      password: hashedPassword,
      address,
      contact,
      gender,
    };
    //   save user to database
    await userSchema.create(newUser);
    res.json({ status: 200, message: "User created successfully" });
  } catch (err) {
    res.json({ status: 500, message: "something went wrong", err: err });
    console.log(err);
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userSchema.findOne({ email: email });
    if (!user) {
      return res.json({ status: 404, message: "User not found" });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.json({ status: 401, message: "Invalid password" });
    } else {
      // generate a token
      const token = jwt.sign({ email: user.email }, secretKey, {
        expiresIn: "1hr",
      });
      console.log("generated token: ", token);
      return res.json({
        status: 200,
        message: "User logged in successfully",
        token,
      });
    }
  } catch (err) {
    res.json({ status: 500, message: "something went wrong", err });
  }
});

module.exports = router;
