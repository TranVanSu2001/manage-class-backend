const { db } = require("../service/db");
const { RESPONSE_CODE } = require("../constant");

//get all student
const getAllStudentController = async (req, res) => {
  const [rows, fields] = await db.promise().query("SELECT * FROM student");

  res.send({
    code: RESPONSE_CODE.SUCCESS,
    message: "Get all student successful",
    data: rows,
  });
};

//add new student
const createStudentController = async (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const age = req.body.age;
  const email = req.body.email;
  const classID = req.body.classID;
  const sex = req.body.sex;

  if (id === undefined) {
    res.send({
      code: RESPONSE_CODE.INVALID_BODY,
      message: "@id can not be empty",
    });
  }

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

  res.send({
    code: RESPONSE_CODE.SUCCESS,
    message: "Create student successful",
  });
};

//get list id student
const getIdStudentController = async (req, res) => {
  const [rows, fields] = await db.promise().query("SELECT id FROM student");

  res.send({
    code: RESPONSE_CODE.SUCCESS,
    message: "Get list id student successful",
    data: rows,
  });
};

//update student
const updateStudentController = async (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const age = req.body.age;
  const sex = req.body.sex;
  const email = req.body.email;
  const classID = req.body.classID;

  if (id === undefined) {
    res.send({
      code: RESPONSE_CODE.INVALID_BODY,
      message: "@id can not be empty",
    });
  }

  const [rows, fields] = await db
    .promise()
    .query(
      `UPDATE student set name = ?, age = ?, sex = ?, email = ?, classID = ? where id = ?`,
      [name, age, sex, email, classID, id]
    );

  res.send({
    code: RESPONSE_CODE.SUCCESS,
    message: "Update student successful",
    data: rows,
  });
};

const deleteStudentController = async (req, res) => {
  const idDelete = req.params.idDelete;

  if (idDelete === undefined) {
    res.send({
      code: RESPONSE_CODE.INVALID_BODY,
      message: "@idDelete can not be empty",
    });
  }

  const [rows, fields] = await db
    .promise()
    .query(`delete from student where id = (?);`, [idDelete]);

  res.send({
    code: RESPONSE_CODE.SUCCESS,
    message: "Delete student successful",
  });
};

module.exports = {
  getAllStudentController,
  createStudentController,
  getIdStudentController,
  updateStudentController,
  deleteStudentController,
};
