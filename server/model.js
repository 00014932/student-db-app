const mongoose = require("mongoose");

var studentScheme = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Full Name is required"],
  },
  studentId: {
    type: String,
    required: [true, "Student ID is required"],
  },
  level: {
    type: Number,
    required: [true, "Level is required"],
  },
  scholarship: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
});

const Student = mongoose.model("Student", studentScheme);
module.exports = Student;
