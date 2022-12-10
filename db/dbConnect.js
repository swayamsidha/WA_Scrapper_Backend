const mysql      = require('mysql');
const fs = require('fs')
const path = require('path');
require('dotenv').config();
console.log('host is', process.env.DB_HOST)
const connection = mysql.createConnection({
  host:process.env.DB_HOST,
  port:process.env.DB_PORT,
  user:process.env.DB_USER,
  password:process.env.DB_PASS,
  database:process.env.DB_SCHEMA,
  ssl: true
  //{ca: fs.readFileSync(path.resolve(__dirname, 'BaltimoreCyberTrustRoot.crt.pem'))}
});

module.exports = connection