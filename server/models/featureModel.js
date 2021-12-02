const { client } = require('../../db/config.js');

module.exports = {
  getProductFeatures: (product_id) => {
    const queryString = `SELECT * FROM features WHERE product_id = ${product_id}`;

    return client.query(queryString)
      .then( ( {rows} ) => { // Returns an array of feature objects
        return rows;
      })
      .catch( (err) => {
        console.error(err);
        console.error('Error in featureModel.js');
      });
  }
}