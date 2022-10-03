const db = require("../../database/database.js");

const sql = {
  get: {
    all: "SELECT * FROM PRODUCTS",
    one: "SELECT * FROM PRODUCTS WHERE id = ?",
  },
};

// retrieve all products
exports.all = function (req, res) {
  db.all(sql.get.all, [], function (err, rows) {
    if (err) {
      res.status(400).json({
        error: err.message,
      });
      return;
    }
    res.status(200).json({
      message: "Success.",
      data: rows,
    });
  });
};

// retrieve one product by id
exports.one = function (req, res) {
  const id = req.params.id;
  db.get(sql.get.one, id, function (err, row) {
    if (err) {
      res.status(400).json({
        error: err.message,
      });
      return;
    }
    res.status(200).json({
      message: "Success.",
      data: row,
    });
  });
};
