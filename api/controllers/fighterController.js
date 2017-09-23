var fighterDao = require('../dao/fighterDao');

exports.get_all = function(req, res) {
    fighterDao.get_all(function(result){
        res.json(result);
    });
}

exports.get_by_id = function(req, res) {
    fighterDao.get(req.params.fighterId, function(result){
        res.json(result);
    });
}

exports.insert = function(req, res) {
    fighterDao.save(req.body, function(result){
        res.json(result);
    });
}

exports.update = function(req, res) {
    fighterDao.update(req.body, function(result){
        res.json(result);
    });
}

exports.delete = function(req, res) {
    fighterDao.delete(req.params.fighterId, function(result){
        res.json(result);
    });
}
