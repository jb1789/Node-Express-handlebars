var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');
//set up base route
router.get('/', function(req,res){
  burger.all(function(burger_data){
    console.log(burger_data);
    res.render('index',{burger_data});

  })
})

router.put('/burgers/update',function(req,res){
  burger.update(req.body.burger_id, function(result){
    console.log(result);
    res.redirect('/');
  });
});

router.post('/burgers/create',function(req,res){
  burger.create(req.body.burger_name, function(result){
    res.redirect('/');
  })
})
//need to exports routes from this file. cannot connect to browser otherwise
//this links both router.js & server.js files together
module.exports = router;
