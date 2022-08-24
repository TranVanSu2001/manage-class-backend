const express = require('express');
const { getAllClassController, createClassController, updateClassController, deleteClassController } = require('../controller/class');

const classRouter = express.Router();

classRouter.get("/", getAllClassController);
classRouter.post("/", createClassController);
classRouter.put("/", updateClassController);
classRouter.delete("/:classdId", deleteClassController);

module.exports = classRouter;