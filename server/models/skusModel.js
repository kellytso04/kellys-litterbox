const { client } = require('../../db/config.js');

module.exports = {
  getSkus: (style_id) => {
    const queryString = `SELECT * FROM skus WHERE style_id = ${style_id}`;

    client.query(queryString)
      .then( ({data}) => {
        console.log(data);
        return data;
      })
      .catch( (err) => {
        console.error(err);
        console.error('Error getting skus in skusModel.js');
      })
  }
}