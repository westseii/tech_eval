// commonly repeated sql; has placeholders
const sql = {
  postProduct: `
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
    `,
  getProducts: `
    select * from PRODUCTS
    `,
  getProductById: `
    select * from PRODUCTS where id = ?
    `,
};

module.exports = sql;
