const { createPool } = require("mysql2");
require("dotenv").config();

// create connection pool
const db = createPool({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  insecureAuth: true,
  multipleStatements: true,
});

// initialize table when server has started
const initTable = async () => {
  await db.promise().query(`create table if not exists Class(
            id varchar(255) primary key,
            name varchar(255),
            numberOfStudent int
    )`);

  await db.promise().query(`create table if not exists Subject(
        id varchar(255) primary key,
        name varchar(255),
        classID varchar(255),
        foreign key(classID) references Class(id),
        startTime varchar(255),
        endTime varchar(255)
    )`);

  await db.promise().query(`create table if not exists Student(
        id varchar(255) primary key,
        name varchar(255),
        age int,
        email varchar(255),
        sex varchar(10),
        classID varchar(255),
        foreign key(classID) references Class(id)
    )`);

  await db.promise().query(`create table if not exists ClassStudent(
        id varchar(255) primary key,
        classID varchar(255),
        foreign key (classID) references Subject(id),
        studentID varchar(255),
        foreign key (studentID) references Student(id)
    )`);
};

module.exports = { initTable, db };
