const express = require("express");
const { getAllStudentController } = require("../controller/student");

const studentRouter = express.Router();

studentRouter.get("/", getAllStudentController);

module.exports = studentRouter;