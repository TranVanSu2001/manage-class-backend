const express = require('express');
const { getAllClassController } = require('../controller/class');

const classRouter = express.Router();

classRouter.get("/", getAllClassController);

module.exports = classRouter;