var $ = require('jquery');

// legacy loading for bootstrap
window.jQuery = window.$ = $;
require('bootstrap');

import landing from 'templates/school/schoolBooksLanding.html';


var app = {
  init: function(){
    app.render();
  },
  render: function(){
    $('.school-main').html(landing);
    
  }
};

module.exports = app;

