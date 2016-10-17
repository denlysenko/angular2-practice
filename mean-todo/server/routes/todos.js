var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://den:admin@ds053186.mlab.com:53186/meantodos_dev_den', ['todos']);

/* GET todos listing. */
router.get('/todos', function(req, res, next) {
  db.todos.find(function(err, todos) {
    if(err) {
      console.error(err);
      return res.send(err);
    }

    res.json(todos);
  })
});

/* GET single todo */
router.get('/todos/:id', function(req, res, next) {
  db.todos.findOne({
    _id: mongojs.ObjectId(req.params.id)
  }, function(err, todo) {
    if(err) {
      console.error(err);
      return res.send(err);
    }

    res.json(todo);
  });
});

/* SAVE single todo */
router.post('/todos', function(req, res, next) {
  var todo = req.body;

  if(!todo.text) {
    return res.status(400).send({message: 'Invalid data'});
  }

  db.todos.save(todo, function(err, result) {
    if(err) {
      console.error(err);
      return res.send(err);
    }

    res.json(result);
  });
});

/* UPDATE single todo */
router.put('/todos/:id', function(req, res, next) {
  var todo = req.body;

  if(!todo.text) {
    return res.status(400).send({message: 'Invalid data'});
  }

  db.todos.update({
    _id: mongojs.ObjectId(req.params.id)
  }, todo, null, function(err, result) {
    if(err) {
      console.error(err);
      return res.send(err);
    }

    res.json(result);
  });
});

/* DELETE single todo */
router.delete('/todos/:id', function(req, res, next) {
  db.todos.remove({
    _id: mongojs.ObjectId(req.params.id)
  }, null, function(err, result) {
    if(err) {
      console.error(err);
      return res.send(err);
    }

    res.json(result);
  });
});


module.exports = router;
