const { db } = require('../../db/stream.js');

module.exports = {
  getAllProducts: () => {
    const queryString = 'SELECT * FROM products';

    db.query(queryString)
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
    const queryString = '';

    db.query(queryString)
      .then( ( {data} ) => {
        return data;
      })
      .catch( (err) => {
        console.error(err);
        console.error('Error in productModel/getProduct');
      })
  }
}