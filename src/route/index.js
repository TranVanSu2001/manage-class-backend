const express = require('express');
const classRouter = require("./class");

const router = express.Router();

router.use("/class", classRouter);

module.exports = router;