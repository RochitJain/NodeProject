const mysql = require("mysql");

database = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "node",
  database: "nodemysql",
});

database.connect((err) => {
  if (err) {
    throw new Error(err);
  }
  console.log("Connected to database");
});

module.exports = database;
