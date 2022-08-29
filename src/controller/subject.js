const { db } = require("../service/db");
const { RESPONSE_CODE } = require("../constant");

const getAllSubjectController = async (req, res) => {
  const [rows, fields] = await db.promise().query("SELECT * FROM subject");

  res.send({
    code: RESPONSE_CODE.SUCCESS,
    message: "Get all class successful",
    data: rows,
  });
};

const getListIdSubjectController = async (req, res) => {
  const [rows, fields] = await db.promise().query("SELECT id FROM subject");

  res.send({
    code: RESPONSE_CODE.SUCCESS,
    message: "Get list id subject successful",
    data: rows,
  });
};

const createSubjectController = async (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const classID = req.body.classID;
  const startTime = req.body.startTime;
  const endTime = req.body.endTime;

  if (id === undefined) {
    res.send({
      code: RESPONSE_CODE.INVALID_BODY,
      message: "@id can not be empty",
    });
  }

  const [rows, fields] = await db
    .promise()
    .query("INSERT INTO subject values(?,?,?,?,?)", [
      id,
      name,
      classID,
      startTime,
      endTime,
    ]);

  res.send({
    code: RESPONSE_CODE.SUCCESS,
    message: "Create subject successful",
  });
};

const deleteSubjectController = async (req, res) => {
  const idDelete = req.params.idDelete;

  if (idDelete === undefined) {
    res.send({
      code: RESPONSE_CODE.INVALID_BODY,
      message: "@idDelete can not be empty",
    });
  }

  const [rows, fields] = await db
    .promise()
    .query(`delete from subject where id = (?);`, [idDelete]);

  res.send({
    code: RESPONSE_CODE.SUCCESS,
    message: "Delete subject successful",
  });
};

const updateSubjectController = async (req, res) => {
  const id = req.body.id;
  const name = req.body.name;
  const classID = req.body.classID;
  const startTime = req.body.startTime;
  const endTime = req.body.endTime;

  if (id === undefined) {
    res.send({
      code: RESPONSE_CODE.INVALID_BODY,
      message: "@id can not be empty",
    });
  }

  const [rows, fields] = await db
    .promise()
    .query(
      `UPDATE subject set name = ?, classID = ?, startTime = ?, endTime = ? where id = ?`,
      [name, classID, startTime, endTime, id]
    );

  res.send({
    code: RESPONSE_CODE.SUCCESS,
    message: "Update subject successful",
    data: rows,
  });
};

module.exports = {
  getAllSubjectController,
  getListIdSubjectController,
  createSubjectController,
  deleteSubjectController,
  updateSubjectController,
};
