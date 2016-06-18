
var $ = require('jquery');

// legacy loading for bootstrap
window.jQuery = window.$ = $;
require('bootstrap');
require('jquery.easing');
import projectMain from 'templates/projectMain.html';

var app = {
  init: function() {
    app.render();
  },
  render: function() {
    $('.project-main').append(projectMain);
  }
};

module.exports = app;
