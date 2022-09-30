const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'cuadro.bebo2326@gmail.com',
  password: '0000',
  database: 'employees'
});

module.exports = db;
