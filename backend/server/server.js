const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("../database/database.js");
const express = require("express");
const process = require("node:process");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors()); // cross-origin fetch

const port = 3000;
// start express server
app.listen(port, () => {
  console.log(`Express server running on port: ${port}`);
});

// root
app.get("/api", (req, res) => {
  res.json({ message: "Ok" });
});

// route modules
const product = require("./routes/product.js");

// routes
app.get("/api/products", product.all);
app.get("/api/product/:id", product.one);

// any other request; 404
app.use((req, res, next) => {
  res.status(404).send("404: Resource cannot be found.");
});

// close
process.on("SIGINT", () => {
  console.log(`Process ${process.pid} has been interrupted.`);
  process.exit(0);
});

// close db connection
process.on("exit", (code) => {
  console.log(`Exiting with event code: ${code}`);
  db.close((err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log("Connection closed.");
    }
  });
});
