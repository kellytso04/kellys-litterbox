const { client } = require('../../db/config.js');

module.exports = {
  getSkus: (style_id) => {
    const queryString = `SELECT * FROM skus WHERE style_id = ${style_id}`;

    return client.query(queryString)
      .then( ({rows}) => {
        console.log(rows);
        return rows;
      })
      .catch( (err) => {
        console.error(err);
        console.error('Error getting skus in skusModel.js');
      })
  }
}