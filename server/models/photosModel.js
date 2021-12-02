const { client } = require('../../db/config.js');

module.exports = {
  getStylePhotos: (style_id) => {
    const queryString = `SELECT * FROM photos WHERE style_id = ${style_id}`;

    return client.query(queryString)
      .then( ({rows}) => {
        return rows;
      })
      .catch( (err) => {
        console.error(err);
        console.error('Error in photoModels.js');
      });
  }
}