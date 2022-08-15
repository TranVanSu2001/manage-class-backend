

const { createPool } = require("mysql2");

const db = createPool({
  host: "localhost",
  user: "root",
  database: "dashboard",
  insecureAuth: true,
  multipleStatements: true,
});

module.exports = db;
