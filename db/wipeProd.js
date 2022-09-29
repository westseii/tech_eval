const sqlite3 = require("sqlite3").verbose();

// db instance
const db = new sqlite3.Database("db/prod.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Success: Connected to db.");
  }
});

// drop table
db.run("drop table PRODUCTS");

// close db connection
db.close((err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Success: Connection closed.");
  }
});
