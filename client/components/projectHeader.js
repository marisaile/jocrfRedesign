var $ = require('jquery');
window.jQuery = window.$ = $;
require('bootstrap');

import projectNavMenu from 'templates/projectNavMenu.html';
import projectHeaderImage from 'templates/projectHeaderImage.html';
import projectSearch from 'templates/projectSearch.html';

var app = {
  init: function() {
    app.render();
  },
  render: function() {
    $('.project-header').append(projectNavMenu);
    $('.project-header').append(projectHeaderImage);
    $('.project-header').append(projectSearch);
  }
};
module.exports = app;
