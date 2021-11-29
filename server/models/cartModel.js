const { client } = require('../../db/config.js');

module.exports = {
  viewCart: () => {
    const queryString = 'SELECT * FROM cart';

    client.query(queryString)
      .then( ({data}) => {
        console.log(data);
        return data;
      })
      .catch( (err) => {
        console.error(err);
        console.error('Error in cartModel.js');
      });
  },

  addToCart: (item) => {
    const queryString = 'INSERT INTO cart(name, sku_id, size, price, count) VALUES(value1, value2, value3, value4, value5)';

    client.query(queryString)
      .catch( (err) => {
        console.error(err);
        console.error('Error in cartModel.js');
      });
  }
}
