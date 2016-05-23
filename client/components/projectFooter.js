var $ = require('jquery');
window.jQuery = window.$ = $;
require('bootstrap');

import projectFooter from 'templates/projectFooter.html';

var app = {
  init: function() {
    app.render();
  },
  render: function() {
    $('.project-footer').append(projectFooter);
  }
};
module.exports = app;
