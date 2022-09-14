const { db } = require("../service/db");
const { RESPONSE_CODE } = require("../constant");
const { getAllStudentByClassId } = require("../service/student");
const { getAllClass, createClass } = require("../service/class");

const getAllClassController = async (req, res) => {
  const listData = await getAllClass();

  res.send({
    code: RESPONSE_CODE.SUCCESS,
    message: "Get all class successful",
    data: listData,
  });
};

const createClassController = async (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const numberOfStudent = req.body.numberOfStudent;

  if (id === undefined) {
    res.send({
      code: RESPONSE_CODE.INVALID_BODY,
      message: "@id can not be empty",
    });
  }

  const result = await createClass({ numberOfStudent, id, name });

  res.send({
    code: RESPONSE_CODE.SUCCESS,
    message: "Create class successful",
    data: result,
  });
};

const updateClassController = async (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const numberOfStudent = req.body.numberOfStudent;

  if (id === undefined) {
    res.send({
      code: RESPONSE_CODE.INVALID_BODY,
      message: "@id can not be empty",
    });
  }

  const [rows, fields] = await db
    .promise()
    .query(`UPDATE class set name = ?, numberOfStudent = ? where id = ?;`, [
      name,
      numberOfStudent,
      id,
    ]);

  res.send({
    code: RESPONSE_CODE.SUCCESS,
    message: "Update class successful",
    data: rows,
  });
};

const deleteClassController = async (req, res) => {
  const classdId = req.params.classdId;

  if (classdId === undefined) {
    res.send({
      code: RESPONSE_CODE.INVALID_BODY,
      message: "@classdId can not be empty",
    });
  }

  const [rows, fields] = await db
    .promise()
    .query(`delete from class where id = (?);`, [classdId]);

  res.send({
    code: RESPONSE_CODE.SUCCESS,
    message: "Delete class successful",
    data: rows,
  });
};

const getAllStudentClassController = async (req, res) => {
  const classID = req.params.classID;

  if (classID === undefined) {
    res.send({
      code: RESPONSE_CODE.INVALID_BODY,
      message: "@classID can not be empty",
    });
  }
  const listClass = await getAllStudentByClassId(classID);

  res.send({
    code: RESPONSE_CODE.SUCCESS,
    message: "Get all student in class successful",
    data: listClass,
  });
};

//get list id class
const getIdClassController = async (req, res) => {
  const [rows, fields] = await db.promise().query("SELECT id FROM class");

  res.send({
    code: RESPONSE_CODE.SUCCESS,
    message: "Get list id class successful",
    data: rows,
  });
};

module.exports = {
  getAllClassController,
  createClassController,
  updateClassController,
  deleteClassController,
  getAllStudentClassController,
  getIdClassController,
};
