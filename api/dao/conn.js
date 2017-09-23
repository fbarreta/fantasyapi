var mysql      = require('mysql');

var pool = mysql.createPool({
  connectionLimit : 100,
  host     : 'localhost',
  user     : 'root',
  password : 'masterkey',
  database : 'fantasy',
  debug    :  false
});

module.exports = pool;
