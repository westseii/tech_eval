const sqlite3 = require("sqlite3").verbose();

// db instance
const db = new sqlite3.Database("backend/database/prod.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  } else {
    console.log("Success: Connected to db.");
  }
});

module.exports = db;
