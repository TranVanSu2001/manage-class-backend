const { db } = require("../service/db");
const { RESPONSE_CODE } = require("../constant");

const getAllClassController = async (req, res) => {
    const [rows, fields] = await db.promise().query("SELECT * FROM class");

    res.send({
        code: RESPONSE_CODE.SUCCESS,
        message: "Get all class successful",
        data: rows
    });
};

module.exports = {
    getAllClassController
};