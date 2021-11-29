const { client } = require('../../db/config.js');

module.exports = {
  getRelatedProducts: (product_id) => {
    const queryString = `SELECT * FROM related WHERE current_product = ${product_id}`;

    client.query(queryString)
      .then( ({data}) => {
        console.log(data);
        return data;
      })
      .catch( (err) => {
        console.error(err);
        console.error('Error in relatedModel.js');
      });
  }
}