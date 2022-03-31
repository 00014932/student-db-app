const Student = require("./model");

exports.createStudent = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).send({ message: "Empty!" });
    }
    const newStudent = await Student.create(req.body);
    res.redirect("/");
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error,
    });
  }
};

exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find({});
    if (!students) {
      res.status(404).json({
        message: "Something went wrong",
        status: 404,
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        students,
      },
    });
  } catch (err) {
    res.status(err.statusCode).json({
      message: "Couldn't get students",
      status: err.statusCode,
      reason: err,
    });
  }
};

exports.getStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    console.log(req.params);
    if (!student) {
      res.status(404).json({
        message: "Couldn't find a student",
        status: 404,
      });
    }

    res.status(200).json({
      status: "success",
      data: {
        student,
      },
    });
  } catch (error) {
    res.status(error.statusCode).json({
      message: "Something went wrong",
      status: error.statusCode,
      reason: error,
    });
  }
};

exports.updateStudent = async (req, res) => {
  try {
    console.log(req.params.id);
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    console.log(student);
    res.status(200).json({
      status: "success",
      data: {
        student,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// Delete
exports.deleteStudent = async (req, res) => {
  const id = req.params.id;

  Student.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` });
      } else {
        res.send({
          message: "User was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete User with id=" + id,
      });
    });
};
