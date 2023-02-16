const mysql = require("mysql");

// membuat koneksi mysql
const dbConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "weblomba",
});

dbConn.connect(function (error) {
  if (error) throw error;
  console.log("Database Connected Successfully!!!");
});

module.exports = dbConn;
