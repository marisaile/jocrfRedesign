var $ = require('jquery');

// legacy loading for bootstrap
window.jQuery = window.$ = $;
require('bootstrap');
import math from 'templates/school/math.html';


var app =  {
  init: function(){
    app.render();
  },
  render: function(){
    $('.response-container').html(math);
    
  }
};

module.exports = app;