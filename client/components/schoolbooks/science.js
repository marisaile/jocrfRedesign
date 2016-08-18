var $ = require('jquery');

// legacy loading for bootstrap
window.jQuery = window.$ = $;
require('bootstrap');
import science from 'templates/school/science.html';

var app =  {
  init: function(){
    app.render();
  },
  render: function(){
    $('.response-container').html(science);
   
  }
};

module.exports = app;