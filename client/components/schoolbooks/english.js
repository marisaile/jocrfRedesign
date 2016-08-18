var $ = require('jquery');

// legacy loading for bootstrap
window.jQuery = window.$ = $;
require('bootstrap');
import english from 'templates/school/englishLit.html';

var app =  {
  init: function(){
    app.render();
  },
  render: function(){
    $('.response-container').html(english);
  }
};

module.exports = app;