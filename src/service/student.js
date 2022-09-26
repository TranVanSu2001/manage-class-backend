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

const createStudent = async (data) => {
  try {
    const id = data.id;
    const name = data.name;
    const age = data.age;
    const email = data.email;
    const classID = data.classID;
    const sex = data.sex;

    const [rows, fields] = await db
      .promise()
      .query("INSERT INTO student values(?,?,?,?,?,?)", [
        id,
        name,
        age,
        email,
        sex,
        classID,
      ]);

    return rows;
  } catch (err) {
    throw new Error(err);
  }
};

const updateStudent = async (data) => {
  try {
    const id = data.id;
    const name = data.name;
    const age = data.age;
    const email = data.email;
    const classID = data.classID;
    const sex = data.sex;

    const [rows, fields] = await db
      .promise()
      .query(
        `UPDATE student set name = ?, age = ?, sex = ?, email = ?, classID = ? where id = ?`,
        [name, age, sex, email, classID, id]
      );

    return rows;
  } catch (err) {
    throw new Error(err);
  }
};

const deleteStudent = async (data) => {
  try {
    const idDelete = data.idDelete;

    const [rows, fields] = await db
      .promise()
      .query(`delete from student where id = (?);`, [idDelete]);

    return rows;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  getAllStudentByClassId,
  createStudent,
  updateStudent,
  deleteStudent,
};
