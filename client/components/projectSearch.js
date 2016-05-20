var $ = require('jquery');

// legacy loading for bootstrap
window.jQuery = window.$ = $;
require('bootstrap');

import projectSearch from 'templates/projectSearch.html';


var app = {
  init: function() { 
    app.render();
  },
  render: function() {
    $('project-header').append(projectSearch);
  }
};
module.exports = app;
