const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    match: /.+\@.+\..+/, // Simple email validation
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Minimum length for password
  },
  contact: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"], // Restrict to specific values
    default: "Other", // Default value
  },
});

module.exports = mongoose.model("User", userSchema);
