const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./database.js");
const express = require("express");
const process = require("node:process");
const sql = require("./sql/common.js");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors()); // cross-origin fetch; let back/front-end communicate while on different ports, locally

const port = 3000;

// start express server
app.listen(port, () => {
  console.log(`Express server running on port ${port}`);
});

// server/api root
app.get("/", (req, res) => {
  res.json({ message: "Ok" });
});

//
// api endpoints

// post a product
app.post("/api/product", (req, res, next) => {
  const product = {
    id: req.body.id,
    title: req.body.title,
    description: req.body.description,
    image: req.body.image,
    price: req.body.price,
    likes: req.body.likes,
  };
  const params = Object.values(product); // to params array
  db.run(sql.postProduct, params, function (err, result) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.status(201).json({
      message: "Success.",
      data: product,
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
    res.status(200).json({
      message: "Success.",
      data: row,
    });
  });
});

// get all products
app.get("/api/product", (req, res, next) => {
  const params = [];
  db.all(sql.getProducts, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.status(200).json({
      message: "Success.",
      data: rows,
    });
  });
});

// delete one product by id
app.delete("/api/product/:id", (req, res, next) => {
  const params = [req.params.id];
  db.run(sql.deleteProductById, params, function (err) {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.status(204).json({
      message: "Deleted.",
    });
  });
});

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
