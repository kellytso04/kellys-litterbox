const fs = require('fs');
const fastcsv = require('fast-csv');
const { Pool } = require('pg');

const pool = new Pool({
  user: 'kellytso',
  database: 'sdc',
  port: 5432
});

let stream = fs.createReadStream('/Users/kellytso/Documents/GitHub/litterbox/data/photos.csv');
  stream.on('error', (err) => {
    console.error(err);
  });
let csvData = [];
let csvStream = fastcsv
  .parse()
  .on('data', (err, data) => {
    if (!err) {
      csvData.push(data);
    }
  })
  .on('end', (data) => {
    // Removes header from the array
    csvData.shift();

    const query = 'INSERT INTO photos (id, style_id, url, thumbnail_url) VALUES ($1, $2, $3, $4)';

    pool.connect( (err, client, done) => {
      if (err) {
        throw new Error(err);
      } else {
        csvData.forEach( (row) => {
          client.query(query, row, (err, res) => {
            if (err) {
              throw new Error(err);
            }
          })
        })
      }

      done();
    })

  })
  .on('error', (err) => {
    console.error(err);
  });

stream.pipe(csvStream);

module.exports = {
  db: pool
}