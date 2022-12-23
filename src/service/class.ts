import { db } from "./db";
import { IClass } from "@/model/class";

const getAllClass = async () => {
  try {
    const [rows, fields] = await db.promise().query("SELECT * FROM Class");
    return rows;
  } catch (err: any) {
    throw new Error(err);
  }
};

const createClass = async (data: IClass) => {
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
  } catch (err: any) {
    throw new Error(err);
  }
};

const updateClass = async (data: IClass) => {
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
  } catch (err: any) {
    throw new Error(err);
  }
};

const deleteClass = async (data: IClass) => {
  try {
    const { idDelete } = data;

    const [rows, fields] = await db
      .promise()
      .query(`delete from Class where id = (?);`, [idDelete]);

    return rows;
  } catch (err: any) {
    throw new Error(err);
  }
};

const getIdClass = async () => {
  try {
    const [rows, fields] = await db.promise().query("SELECT id FROM Class");

    // console.log("rows: ", result);
    // return resul/t;
    return rows;
  } catch (err: any) {
    throw new Error(err);
  }
};

const findClassExist = async (id: String) => {
  try {
    const [rows, fields] = await db.promise().query("SELECT id FROM Class");
    let result = Object.values(JSON.parse(JSON.stringify(rows)));

    let checkIdClassExist = false;
    result.forEach((value: any) => {
      if (value.id == id) {
        checkIdClassExist = true;
      }
    });

    return checkIdClassExist;
  } catch (err: any) {
    throw new Error(err);
  }
};

export {
  getAllClass,
  createClass,
  updateClass,
  deleteClass,
  getIdClass,
  findClassExist,
};
