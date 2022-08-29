const express = require("express");
const {
  getAllClassController,
  createClassController,
  updateClassController,
  deleteClassController,
  getAllStudentClassController,
  getIdClassController,
} = require("../controller/class");

const classRouter = express.Router();

classRouter.get("/", getAllClassController);
classRouter.post("/", createClassController);
classRouter.put("/", updateClassController);
classRouter.delete("/:classdId", deleteClassController);
classRouter.get("/getStudent/:classID", getAllStudentClassController);
classRouter.get("/listIdClass", getIdClassController);

module.exports = classRouter;
