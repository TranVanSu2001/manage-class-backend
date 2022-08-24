const express = require('express');
const classRouter = require("./class");
const studentRouter = require("./student");

const router = express.Router();

router.use("/class", classRouter);
router.use("/student", studentRouter);

module.exports = router;