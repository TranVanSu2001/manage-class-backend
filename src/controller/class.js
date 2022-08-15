const db = require("../service/db");

const getAllClassController = async (req, res) => {
    const [rows, fields] = await db.promise().query("SELECT * FROM class");


    res.send({
        message: "Get all class successful",
        data: rows
    });
};

module.exports = {
    getAllClassController
};