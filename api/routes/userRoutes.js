'use strict';
module.exports = function(app) {
  var userDao = require('../dao/userDao');

  app.route('/user')
    .get(userDao.get_all);

  app.route('/user/:userId')
    .get(userDao.get);    
};