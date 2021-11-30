const { client } = require('../../db/config.js');

module.exports = {
  getRelatedProducts: (product_id) => {
    const queryString = `SELECT * FROM related WHERE current_product = ${product_id}`;

    return client.query(queryString)
      .then( ({rows}) => {
        return rows;
      })
      .catch( (err) => {
        console.error(err);
        console.error('Error in relatedModel.js');
      });
  }
}