const prodData = require("./prodData.js");
const sqlite3 = require("sqlite3").verbose();

const insertTemplate = `
insert into
  PRODUCTS (id, title, description, image, price, likes)
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

// db instance
const db = new sqlite3.Database("db/prod.db", sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log("Success: Connected to db.");
  }
});

db.serialize(function () {
  db.serialize(function () {
    db.run(`
    create table PRODUCTS (
      id VARCHAR(40),
      title VARCHAR(50),
      description TEXT,
      image VARCHAR(50),
      price DECIMAL(4, 2),
      likes INT
    );
    `);

    db.serialize(function () {
      const template = db.prepare(insertTemplate);

      for (let i = 0; i < prodData.length; i++) {
        template.run(prodData[i], function (err) {
          if (err) throw err;
        });
      }
      template.finalize();
    });
  });
});

// display in terminal which rows were added
db.all("select * from PRODUCTS", [], (err, rows) => {
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
