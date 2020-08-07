//this folder requries the orm
//'burgers' is the table input
//function(response) is the callback which will be sent into the routes.js file

var orm = require('../config/orm.js');

var burger = {
  all: function(cb){
    orm.all('burgers',function(res){
      cb(res);
    })
  },

  update: function(id,cb){
    orm.update('burgers',id,cb);
  },

  create: function(name,cb){
    orm.create('burgers', name, cb);
  }
}

module.exports = burger;
