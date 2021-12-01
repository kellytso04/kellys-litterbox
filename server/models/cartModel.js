const { client } = require('../../db/config.js');

module.exports = {
  viewCart: () => {
    const queryString = 'SELECT * FROM cart';

    return client.query(queryString)
      .then( ({rows}) => {
        return rows;
      })
      .catch( (err) => {
        console.error(err);
        console.error('Error in cartModel.js');
      });
  },

  addToCart: (item) => {
    console.log('made it to addToCart');
    const queryString = 'INSERT INTO cart(id, name, sku_id, size, price, count) VALUES(value1, value2, value3, value4, value5, value6)';

    client.query(queryString)
      .catch( (err) => {
        console.error(err);
        console.error('Error in cartModel.js');
      });
  }
}
