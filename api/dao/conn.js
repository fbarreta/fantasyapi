var mysql      = require('mysql');

var pool = mysql.createPool({
  connectionLimit : 100,
  host     : 'localhost',
  user     : 'root',
  password : 'xxxx',
  database : 'adm',
  debug    :  false
});

module.exports = pool;
