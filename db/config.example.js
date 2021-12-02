const { Pool } = require('pg');

const pool = new Pool({
  user: 'YOUR_USERNAME_HERE',
  database: 'DB_HERE',
  port: 5432
});

pool.connect( (err) => {
  if (err) {
    console.error('Error connecting to the client');
  }
});

module.exports = {
  client: pool
}