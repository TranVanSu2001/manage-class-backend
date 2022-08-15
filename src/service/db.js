

const { createPool } = require("mysql2");

const db = createPool({
    host: "localhost",
    user: "root",
    password: "88888888", // replace with your database password
    database: "dashboard",
    insecureAuth: true,
    multipleStatements: true,
});

module.exports = db;
