var $ = require('jquery');

// legacy loading for bootstrap
window.jQuery = window.$ = $;
require('bootstrap');
import polisci from 'templates/school/polisci.html';
import header from 'components/schoolbooks/header';

var app = {
  init: function(){
    app.render();
  },
  render: function(){
   $('.school-main').html(polisci);
  }
};

module.exports = app;

