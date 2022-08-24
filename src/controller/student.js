const { db } = require("../service/db");
const { RESPONSE_CODE } = require("../constant");

const getAllStudentController = async (req, res) => {
    const [rows, fields] = await db.promise().query("SELECT * FROM student");

    res.send({
        code: RESPONSE_CODE.SUCCESS,
        message: "Get all student successful",
        data: rows
    });
};

module.exports = { getAllStudentController };