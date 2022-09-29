const cors = require("cors");
const db = require("./database.js");
const express = require("express");
const process = require("node:process");
const sql = require("./sql/commonSql.js");

const app = express();
app.use(cors());

const port = 3000;

// start express server
app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});

// root endpoint
app.get("/", (req, res) => {
  res.json({ message: "Ok" });
});

// useful API endpoints
app.get("/api/products", (req, res, next) => {
  const params = [];
  db.all(sql.getProducts, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "Success.",
      data: rows,
    });
  });
});

// any other request; 404
app.use(function (req, res) {
  res.status(404);
});

// close db connection
process.on("exit", (code) => {
  console.log("Exiting with event with code: ", code);

  db.close((err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log("Success: Connection closed.");
    }
  });
});
