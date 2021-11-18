const fs = require('fs');
const fastcsv = require('fast-csv');
const { Pool } = require('pg');
const path = require('path');
// const poo = require('../data/products.csv');

let stream = fs.createReadStream('/Users/kellytso/Documents/GitHub/litterbox/data/products.csv');
  stream.on('error', (err) => {
    console.error(err);
  });
let csvData = [];
// is it wise to store the data from the csv? it's a lot of space
let csvStream = fastcsv
  .parse()
  .on('data', (data) => {
    csvData.push(data);
  })
  .on('end', (data) => {
    // Removes header from the array
    csvData.shift();

    // Connect to the database and save data
    const pool = new Pool({
      user: 'kellytso',
      database: 'sdc',
      port: 5432
    });

    const query = 'INSERT INTO products (id, name, slogan, description, category, default_price) VALUES ($1, $2, $3, $4, $5, $6)';

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
  })

stream.pipe(csvStream);