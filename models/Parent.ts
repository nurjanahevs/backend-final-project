import mongoose from "mongoose";
const bcrypt = require("bcrypt");

const parentSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please fill a valid email address"],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 20,
  },
  role: {
    type: String,
    default: "Parent",
  },
});

module.exports = mongoose.model("Parent", parentSchema);