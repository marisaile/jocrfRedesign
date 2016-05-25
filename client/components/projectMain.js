var $ = require('jquery');
window.jQuery = window.$ = $;
require('bootstrap');

import projectMain from 'templates/projectMain.html';
import projectMainBackground from 'templates/projectMainBackground.html';

var app = {
  init: function() {
    app.render();
  },
  render: function() { 
    $('.project-main').append(projectMain);
    $('.project-main').append(projectMainBackground);
  }
};

module.exports = app;
