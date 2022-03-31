const Student = require("./model");
// const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });


exports.mainPage = async (req, res) => {
  const students = await Student.find({});
  res.render("../view/index", { students: students });
};

exports.createStudent = (req, res) => {
  res.render("../view/createStudent.ejs");
};

exports.updateStudent = async (req, res) => {
  try{
    const studentData = await Student.findByIdAndUpdate({ _id: req.query.id });
    res.render("../view/updateStudent.ejs", { student: studentData });
  }
  catch(error){
    res.status(404).send({
      status: 'failed',
      message: error
    })
  }
};
