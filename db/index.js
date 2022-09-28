const sqlite3 = require("sqlite3").verbose();

// relative db paths
const dbs = {
  dummy: "db/temp/mock.db",
  prod: "db/eval.db",
};

// npm run db &

// db instance
const db = new sqlite3.Database(dbs.dummy, sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Success: Connected to db.");
  }
});

// db.run("drop table PRODUCTS");

// create table; once
//
// db.run(`
// create table PRODUCTS (
//   id VARCHAR(40),
//   title VARCHAR(50),
//   desc TEXT,
//   image VARCHAR(50),
//   price DECIMAL(4, 2),
//   likes INT
// );
// `);

// insert into PRODUCTS; template
//
const sql = `
insert into
  PRODUCTS (id, title, desc, image, price, likes)
values
  (
    ?,
    ?,
    ?,
    ?,
    ?,
    ?
  );
`;

// run template
//
// db.run(
//   sql,
//   [
//     "2c1b0862-e107-42e8-943e-6a27de604fe1",
//     "Summer Days With Coo",
//     "eu nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante ipsum primis in faucibus",
//     "http://dummyimage.com/107x100.png/dddddd/000000",
//     6.1,
//     3,
//   ],
//   (err) => {
//     if (err) {
//       console.error(err.message);
//     } else {
//       console.log("Success: Row added.");
//     }
//   }
// );

// query PRODUCTS; template
//
const queryAll = `
select * from PRODUCTS
`;

db.all(queryAll, [], (err, rows) => {
  if (err) {
    console.error(err.message);
  } else {
    rows.forEach((row) => console.log(row));
  }
});

// close db connection
db.close((err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Success: Connection closed.");
  }
});
