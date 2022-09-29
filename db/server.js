const cors = require("cors");
const db = require("./database.js");
const express = require("express");
const process = require("node:process");
const sql = require("./sql/common.js");

const app = express();
app.use(cors()); // cross-origin fix; let back/front-end communicate while on different ports, locally

const port = 3000;

// start express server
app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});

// server/api root
app.get("/", (req, res) => {
  res.json({ message: "Ok" });
});
app.get("/api", (req, res) => {
  res.json({ message: "Ok" });
});

//
// api endpoints

// get all products
app.get("/api/product", (req, res, next) => {
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

// get one product by id
app.get("/api/product/:id", (req, res, next) => {
  const params = [req.params.id];
  db.get(sql.getProductById, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "Success.",
      data: row,
    });
  });
});

//
//

// any other request; 404
app.use((req, res, next) => {
  res.status(404).send("404: Resource cannot be found.");
});

// close db connection on exit
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
