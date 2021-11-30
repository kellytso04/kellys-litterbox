const { client } = require('../../db/config.js');

module.exports = {
  getAllProducts: () => {
    const queryString = `SELECT * FROM products LIMIT 5`;

    return client.query(queryString) // Returns an array of product objects
      .then( ( {rows} ) => {
        return rows;
      })
      .catch( (err) => {
        console.error(err);
        console.error('Error in productModel/getAllProducts');
      });
  },

  getProduct: (product_id) => {
    const queryString = `SELECT * FROM products WHERE id = ${product_id}`;

    return client.query(queryString)
      .then( ( {rows} ) => {
        return rows[0];
      })
      .catch( (err) => {
        console.error(err);
        console.error('Error in productModel/getProduct');
      })
  }
}