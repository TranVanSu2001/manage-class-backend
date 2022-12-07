const { db } = require("./db");

const getAllClass = async (req, res) => {
  try {
    const [rows, fields] = await db.promise().query("SELECT * FROM Class");
    return rows;
  } catch (err) {
    throw new Error(err);
  }
};

const createClass = async (data) => {
  try {
    const { id, name, numberOfStudent } = data;

    const [rows, fields] = await db
      .promise()
      .query("INSERT INTO Class (id, name, numberOfStudent) values(?,?,?)", [
        id,
        name,
        numberOfStudent,
      ]);

    return rows;
  } catch (err) {
    throw new Error(err);
  }
};

const updateClass = async (data) => {
  try {
    const { id, name, numberOfStudent } = data;

    const [rows, fields] = await db
      .promise()
      .query(`UPDATE Class set name = ?, numberOfStudent = ? where id = ?;`, [
        name,
        numberOfStudent,
        id,
      ]);

    return rows;
  } catch (err) {
    throw new Error(err);
  }
};

const deleteClass = async (data) => {
  try {
    const { classdId } = data;

    const [rows, fields] = await db
      .promise()
      .query(`delete from Class where id = (?);`, [classdId]);

    return rows;
  } catch (err) {
    throw new Error(err);
  }
};

const getIdClass = async () => {
  try {
    const [rows, fields] = await db.promise().query("SELECT id FROM Class");

    return rows;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  getAllClass,
  createClass,
  updateClass,
  deleteClass,
  getIdClass,
};
