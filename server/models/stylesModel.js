const { client } = require('../../db/config.js');

module.exports = {
  getProductStyles: (product_id) => {
    const queryString = `SELECT * FROM styles WHERE product_id = ${product_id}`

    client.query(queryString)
      .then( ({data}) => {
        console.log(data);
        return data;
      })
      .catch( (err) => {
        console.error(err);
        console.error('Error in stylesModel.js');
      });
  }
}