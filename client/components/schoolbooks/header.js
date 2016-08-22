var $ = require('jquery');

// legacy loading for bootstrap
window.jQuery = window.$ = $;
require('bootstrap');

import header from 'templates/school/bookPageHeader.html';
import landing from 'templates/school/schoolBooksLanding.html';

var app = {
  init: function(){
    app.render();
  },
  render: function(){
  }
};

module.exports = app;


