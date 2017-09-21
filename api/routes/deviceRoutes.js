'use strict';
module.exports = function(app) {
  var deviceDao = require('../dao/deviceDao');

  app.route('/device')
    .get(deviceDao.get_all);
    
};