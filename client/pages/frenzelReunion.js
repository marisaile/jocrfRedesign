import $ from 'jquery';
var lazyload = require('jquery-lazyload');

var app = {
  init: function(){
    app.render();
  },
  render: function(){   
    $('img.lazy').lazyload();
  }
};

module.exports = app;