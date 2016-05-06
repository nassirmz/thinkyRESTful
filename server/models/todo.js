var thinky = require('./../utils/thinky.js');
var type = thinky.type;
var r = thinky.r;
var Todo = thinky.createModel('Todo', {
  id: type.string(),
  description: type.string(),
  completed: type.boolean().default(false),
  createdAt: type.date().default(r.now())
});

module.exports = Todo;