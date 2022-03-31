const express = require("express");
const route = express.Router();
const render = require("./render");
const controller = require("./controller");

route.get("/", render.mainPage);
route.get("/createStudent", render.createStudent);
route.get("/updateStudent", render.updateStudent);

route.post("/api/students", controller.createStudent);
route.get("/api/students", controller.getAllStudents);
route.put("/api/students/:id", controller.updateStudent);
route.delete("/api/students/:id", controller.deleteStudent);

module.exports = route;
