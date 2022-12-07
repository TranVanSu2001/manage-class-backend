const { db } = require("./db");

const getAllSubject = async () => {
  try {
    const [rows, fields] = await db.promise().query("SELECT * FROM Subject");
    return rows;
  } catch (err) {
    throw new Error(err);
  }
};

const createSubject = async (data) => {
  const { id, name, classID, startTime, endTime } = data;

  try {
    const [rows, fields] = await db
      .promise()
      .query("INSERT INTO Subject values(?,?,?,?,?)", [
        id,
        name,
        classID,
        startTime,
        endTime,
      ]);
    return rows;
  } catch (err) {
    throw new Error(err);
  }
};

const updateSubject = async (data) => {
  const { id, name, classID, startTime, endTime } = data;

  try {
    const [rows, fields] = await db
      .promise()
      .query(
        `UPDATE Subject set name = ?, classID = ?, startTime = ?, endTime = ? where id = ?`,
        [name, classID, startTime, endTime, id]
      );
    return rows;
  } catch (err) {
    throw new Error(err);
  }
};

const deleteSubject = async (data) => {
  const { idDelete } = data;

  try {
    const [rows, fields] = await db
      .promise()
      .query(`delete from Subject where id = (?);`, [idDelete]);
    return rows;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  getAllSubject,
  createSubject,
  updateSubject,
  deleteSubject,
};
