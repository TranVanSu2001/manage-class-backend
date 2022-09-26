const express = require("express");
const {
  getAllStudentController,
  createStudentController,
  updateStudentController,
  deleteStudentController,
} = require("../controller/student");

const { sendMailToStudent } = require("../service/sendmail");

const studentRouter = express.Router();

studentRouter.get("/", getAllStudentController);
studentRouter.post("/", createStudentController);
studentRouter.put("/", updateStudentController);
studentRouter.delete("/:idDelete", deleteStudentController);
studentRouter.post("/sendMail", sendMailToStudent);

module.exports = studentRouter;
