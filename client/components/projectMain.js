var $ = require('jquery');
window.jQuery = window.$ = $;
require('bootstrap');

import projectMainBackground from 'templates/projectMainBackground.html';

var app = {
  init: function() {
    app.render();
  },
  render: function() { 
    $('.project-main').append(projectMainBackground);
  }
};

module.exports = app;
