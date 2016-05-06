var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var Todo = require('./models/todo');
var r = require('./utils/thinky').r;

app.use(bodyParser.json());

app.get('/todos', function (req, res) {
  Todo.run()
    .then(function (results) {
      res.send(results);
    })
    .catch(function (err) {
      res.status(500).send(err);
    });
});
app.post('/todos', function (req, res) {
  Todo.save(req.body)
    .then(function (result) {
      res.status(201).send(result);
    });
});
app.put('/todos/:id', function (req, res) {
  var todoID = req.params.id;
  Todo.get(todoID).update(req.body).run()
    .then(function (result) {
      res.send(result);
    });
});

var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log('Listening on port 3000');
});