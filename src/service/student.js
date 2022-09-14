const { db } = require("./db");

const getAllStudentByClassId = async (classID) => {
    try {
        const [rows, fields] = await db
            .promise()
            .query(`select * from student where classID = (?);`, [classID]);

        return rows;
    } catch (err) {
        throw new Error(err);
    }
};

module.exports = {
    getAllStudentByClassId
};