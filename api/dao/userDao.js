pool = require('./conn');
var { User } = require('../models/user');

exports.get_all = function(req, res) {
  pool.query('select * from user', function(error, result){
    var users = [];
    for (var i in result) {
      users.push(new User(
        result[i].id, 
        result[i].name,
        result[i].email
      ));
    }
    res.json(users);
  });
};

exports.get = function(req, res) {
  var id = req.params.userId
  pool.query('select * from user where id = ? limit 1',[id], function(error, result){
    var user;
    for (var i in result) {
      user = new User(
        result[i].id, 
        result[i].name,
        result[i].email
      );
    }
    res.json(user);
  });
}