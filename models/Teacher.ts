import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema({
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
    default: "Teacher",
  },
  subject: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Teacher", teacherSchema);

