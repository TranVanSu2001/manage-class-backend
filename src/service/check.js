const { db } = require("../service/db");
const _ = require("lodash");

const findStudentExist = async (id) => {
  try {
    const [rows, fields] = await db.promise().query("SELECT id FROM Student");

    // let result = _.find([rows], function (obj) {
    //   console.log("obj: " + [...obj]);
    // });

    // const check = rows1.filter(object => {
    //   return object.id == id;
    // })

    // console.log(rows);
    // let listIDArray = [];

    // for( var i of rows) {
    //   listIDArray.push(i.id);
    // }

    let result = Object.values(JSON.parse(JSON.stringify(rows)));
    let check = [];
    check = JSON.stringify(rows);
    console.log(check);

    for (var i of result) {
      console.log("check: ", i);
    }

    console.log(typeof Array.from(result));
    return true;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = { findStudentExist };
