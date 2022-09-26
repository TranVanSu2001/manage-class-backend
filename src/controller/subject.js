const { RESPONSE_CODE } = require("../constant");
const {
  getAllSubject,
  createSubject,
  updateSubject,
  deleteSubject,
} = require("../service/subject");

const getAllSubjectController = async (req, res) => {
  const results = await getAllSubject();

  res.send({
    code: RESPONSE_CODE.SUCCESS,
    message: "Get all class successful",
    data: results,
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

  const results = await createSubject({
    id,
    name,
    classID,
    startTime,
    endTime,
  });

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

  const results = await deleteSubject({ idDelete });

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

  const results = await updateSubject({
    id,
    name,
    classID,
    startTime,
    endTime,
  });

  res.send({
    code: RESPONSE_CODE.SUCCESS,
    message: "Update subject successful",
    data: results,
  });
};

module.exports = {
  getAllSubjectController,
  createSubjectController,
  deleteSubjectController,
  updateSubjectController,
};
