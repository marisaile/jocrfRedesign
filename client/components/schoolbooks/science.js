var $ = require('jquery');

// legacy loading for bootstrap
window.jQuery = window.$ = $;
require('bootstrap');
import science from 'templates/school/science.html';
import header from 'components/schoolbooks/header';

var app = {
  init: function(){
    app.render();
  },
  render: function(){  
    $('.school-main').html(science);
  }
};

module.exports = app;

