var $ = require('jquery');

// legacy loading for bootstrap
window.jQuery = window.$ = $;
require('bootstrap');
import psych from 'templates/school/psych.html';

var app =  {
  init: function(){
    app.render();
  },
  render: function(){
    $('.response-container').html(psych);
  }
};

module.exports = app;