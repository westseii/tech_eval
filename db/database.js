const sqlite3 = require("sqlite3").verbose();

// relative db paths
const dbs = {
  dummy: "db/temp/mock.db",
  prod: "db/prod.db",
};

// db instance
const db = new sqlite3.Database(dbs.prod, sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  } else {
    console.log("Success: Connected to db.");
  }
});

module.exports = db;
