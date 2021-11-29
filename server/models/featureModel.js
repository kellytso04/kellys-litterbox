const { client } = require('../../db/config.js');

module.exports = {
  getProductFeatures: (product_id) => {
    const queryString = `SELECT * FROM features WHERE product_id = ${product_id}`;

    client.query(queryString)
      .then( ( {data} ) => {
        // data is an arr
        console.log(`FEATURES FOR PRODUCT_ID ${product_id}: ${data}`);
        return data;
      })
      .catch( (err) => {
        console.error(err);
        console.error('Error in featureModel.js');
      });
  }
}