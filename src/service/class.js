const { db } = require("./db");

const getAllClass = async (req, res) => {
    try {
        const [rows, fields] = await db.promise().query("SELECT * FROM class");
        return rows;
    } catch (err) {
        throw new Error(err);
    }


};

const createClass = async (data) => {
    try {
        const id = data.id;
        const name = data.name;
        const numberOfStudent = data.numberOfStudent;

        const [rows, fields] = await db
            .promise()
            .query("INSERT INTO class (id, name, numberOfStudent) values(?,?,?)", [
                id,
                name,
                numberOfStudent,
            ]);

        return rows;
    } catch (err) {
        throw new Error(err);
    }
};

module.exports = {
    getAllClass,
    createClass
};