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
};

module.exports = sql;
