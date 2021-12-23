import mongoose from "mongoose";

const homeRoomTeacherSchema = new mongoose.Schema({
  _userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher",
    required: true,
  },
  subjectCode: {
    type: String,
    required: true,
    length: 5,
  },
  subjectName: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 20,
  },
});

module.exports = mongoose.model("HomeRoomTeacher", homeRoomTeacherSchema);