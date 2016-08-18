var $ = require('jquery');

// legacy loading for bootstrap
window.jQuery = window.$ = $;
require('bootstrap');
import history from 'templates/school/history.html';


var app =  {
  init: function(){
    app.render();
  },
  render: function(){
    $('.response-container').html(history);
    
  }
};

module.exports = app;
