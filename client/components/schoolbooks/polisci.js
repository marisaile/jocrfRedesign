var $ = require('jquery');

// legacy loading for bootstrap
window.jQuery = window.$ = $;
require('bootstrap');
import polisci from 'templates/school/polisci.html';

var app =  {
  init: function(){
    app.render();
  },
  render: function(){
    $('.response-container').html(polisci);
  }
};

module.exports = app;

