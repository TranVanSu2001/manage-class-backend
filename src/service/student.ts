import { db } from "./db";
import { IStudent } from "@/model/student";
import _ from "lodash";
import { isAnyArrayBuffer } from "util/types";

const getAllStudent = async () => {
  try {
    const [rows, fields] = await db.promise().query("SELECT * FROM Student");

    return rows;
  } catch (err: any) {
    throw new Error(err);
  }
};

const findStudentExist = async (id: String) => {
  try {
    const [rows, fields] = await db.promise().query("SELECT id FROM Student");
    let result = Object.values(JSON.parse(JSON.stringify(rows)));

    let checkIdStudentExist = false;
    result.forEach((value: any) => {
      if (value.id == id) {
        checkIdStudentExist = true;
      }
    });

    return checkIdStudentExist;
  } catch (err: any) {
    throw new Error(err);
  }
};

const getAllStudentByClassId = async (classID: String) => {
  try {
    const [rows, fields] = await db
      .promise()
      .query(`select * from Student where classID = (?);`, [classID]);

    return rows;
  } catch (err: any) {
    throw new Error(err);
  }
};

const createStudent = async (data: IStudent) => {
  try {
    const { id, name, age, email, classID, sex } = data;

    const [rows, fields] = await db
      .promise()
      .query("INSERT INTO Student values(?,?,?,?,?,?)", [
        id,
        name,
        age,
        email,
        sex,
        classID,
      ]);

    return rows;
  } catch (err: any) {
    throw new Error(err);
  }
};

const updateStudent = async (data: IStudent) => {
  try {
    const { id, name, age, email, classID, sex } = data;

    const [rows, fields] = await db
      .promise()
      .query(
        `UPDATE Student set name = ?, age = ?, sex = ?, email = ?, classID = ? where id = ?`,
        [name, age, sex, email, classID, id]
      );

    return rows;
  } catch (err: any) {
    throw new Error(err);
  }
};

const deleteStudent = async (data: IStudent) => {
  try {
    const { idDelete } = data;

    const [rows, fields] = await db
      .promise()
      .query(`delete from Student where id = (?);`, [idDelete]);

    return rows;
  } catch (err: any) {
    throw new Error(err);
  }
};

export {
  getAllStudent,
  getAllStudentByClassId,
  createStudent,
  updateStudent,
  deleteStudent,
  findStudentExist,
};
