const fs = require('fs');
const fastcsv = require('fast-csv');
const { client } = require('./config.js');

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

    csvData.forEach( (row) => {
      client.query(query, row, (err, res) => {
        if (err) {
          throw new Error(err);
        }
      });
    });

  })
  .on('error', (err) => {
    console.error(err);
  });

// stream.pipe(csvStream);