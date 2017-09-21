pool = require('./conn');

exports.get_all = function(req, res) {
  pool.query('select * from device', function(error, result){
    res.json(result);
  });
};