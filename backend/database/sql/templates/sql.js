// commonly repeated sql; has placeholders
const sql = {
  postProduct: `
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
    `,
  getProductById: "select * from PRODUCTS where id = ?",
  getProducts: "select * from PRODUCTS",
  deleteProductById: "delete from PRODUCTS where id = ?",
};

module.exports = sql;
