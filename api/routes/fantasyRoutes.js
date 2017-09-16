'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/fantasyController');

  // todoList Routes
  app.route('/tasks')
    .get(todoList.list_all_tasks);
};