const { client } = require('../../db/config.js');

module.exports = {
  getProductStyles: (product_id) => {
    const queryString = `SELECT * FROM styles WHERE product_id = ${product_id}`

    return client.query(queryString)
      .then( ({rows}) => {
        return rows;
      })
      .catch( (err) => {
        console.error(err);
        console.error('Error in stylesModel.js');
      });
  }
}