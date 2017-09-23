pool = require('./conn');
var { Fighter } = require('../models/fighter');

exports.get_all = function(res) {
  pool.query('select id, nome, photo from lutador', function(error, result){
    var users = [];
    for (var i in result) {
      users.push(new Fighter(
        result[i].id, 
        result[i].nome,
        result[i].photo
      ));
    }
    res(users);
  });
};

exports.get = function(id, res) {
  pool.query('select id, nome, photo from lutador where id = ? limit 1',[id], function(error, result){
    var user;
    for (var i in result) {
      user = new Fighter(
        result[i].id, 
        result[i].nome,
        result[i].photo
      );
    }
    res(user);
  });
}

exports.save = function(fighter, res) {
  pool.query('insert into lutador (nome, photo) values (?, ?)',[fighter.name, fighter.photo], function(error, result){
    if (error) throw error;
    res({"message": "Fighter Inserted", "id": result.insertId});
  });
};

exports.update = function(fighter, res) {
  pool.query('update lutador set nome = ?, photo = ?  where id = ?',[fighter.name, fighter.photo, fighter.id], function(error, result){
    if (error) throw error;
    res({"message": "Fighter Updated", "id": fighter.id});
  });
};

exports.delete = function(id, res) {
  pool.query('delete from lutador where id = ?',[id], function(error, result){
    if (error) throw error;
    res({"message": "Fighter Deleted", "id": id});
  });
};