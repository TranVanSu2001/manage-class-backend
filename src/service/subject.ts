import { db } from "./db";
import { ISubject } from "../model/subject";

const getAllSubject = async () => {
  try {
    const [rows, fields] = await db.promise().query("SELECT * FROM Subject");
    console.log("rows: ", rows);
    return rows;
  } catch (err: any) {
    throw new Error(err);
  }
};

const createSubject = async (data: ISubject) => {
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
    return data;
  } catch (err: any) {
    console.log("err", err);
    throw new Error(err);
  }
};

const updateSubject = async (data: ISubject) => {
  const { id, name, classID, startTime, endTime } = data;

  try {
    const [rows, fields] = await db
      .promise()
      .query(
        `UPDATE Subject set name = ?, classID = ?, startTime = ?, endTime = ? where id = ?`,
        [name, classID, startTime, endTime, id]
      );
    return data;
  } catch (err: any) {
    throw new Error(err);
  }
};

const deleteSubject = async (data: ISubject) => {
  const { idDelete } = data;

  try {
    const [rows, fields] = await db
      .promise()
      .query(`delete from Subject where id = (?);`, [idDelete]);
    return rows;
  } catch (err: any) {
    throw new Error(err);
  }
};

export { getAllSubject, createSubject, updateSubject, deleteSubject };
