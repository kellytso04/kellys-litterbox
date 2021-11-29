const { client } = require('../../db/config.js');

module.exports = {
  getAllProducts: () => {
    const queryString = `SELECT * FROM products`;

    client.query(queryString)
      .then( ( {data} ) => {
        console.log('products: ', data);
        return data;
      })
      .catch( (err) => {
        console.error(err);
        console.error('Error in productModel/getAllProducts');
      });
  },

  getProduct: (product_id) => {
    const queryString = `SELECT * FROM products WHERE id = ${product_id}`;

    client.query(queryString)
      .then( ( {data} ) => {
        return data;
      })
      .catch( (err) => {
        console.error(err);
        console.error('Error in productModel/getProduct');
      })
  }
}