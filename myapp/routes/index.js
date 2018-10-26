var express = require('express');
var router = express.Router();
var model = require('../models/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/', function (req, res, next) {
  model.User.findAll({})
  .then(users => res.json({
    error: false,
    data: users
  }))
  .catch(error => res.json({
    error: true,
    data: [],
    error: error
  }));
});

router.post('/', function (req, res, next){
  const {
    name, 
    cpf,
    date_of_birth
  } = req.body;
  model.User.create({
    name: name,
    cpf: cpf,
    date_of_birth: date_of_birth
  })
  then(user => res.status(201).json({
    error: false,
    data: user,
    message: 'New User has been created.'
  }))
  .catch(error => res.json({
    error: true,
    data: [],
    error: error
  }));
});

router.put('/:id', function (req, res, next){
  const user_id = req.params.id;
  const { name, cpf, date_of_birth} = req.body;
  model.User.update({
    name: name,
    cpf: cpf,
    date_of_birth: date_of_birth
  }, {
    where: {
      id: user_id
    }
  })
  .then(user => res.status(201).json({
    error: false,
    message: 'user has been updated.'
  }))
  .catch(error => res.json({
    error: true,
    error: error
  }));
});

router.delete('/:id', function (req, res, next) {
  const user_id = req.params.id;
  model.User.destroy({ where: {
    id: user_id
  }})
  .then(status => res.status(201).json({
    error: false,
    message: 'user has been delete.'
  }))
  .catch(error => res.json({
    error: true,
    error: error
  }));
});

module.exports = router;
