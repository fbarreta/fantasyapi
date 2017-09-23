'use strict';
module.exports = function(app) {
  var fighterController = require('../controllers/fighterController');

  app.route('/fighter')
    .get(fighterController.get_all)
    .post(fighterController.insert)
    .put(fighterController.update);

  app.route('/fighter/:fighterId')
    .get(fighterController.get_by_id)
    .delete(fighterController.delete);
};