var $ = require('jquery');
window.jQuery = window.$ = $;
require('bootstrap');

import projectNavMenu from 'templates/projectNavMenu.html';
import projectLearnMenu from 'templates/projectLearnMenu.html';
import projectSearch from 'templates/projectSearch.html';

var app = {
  init: function() {
    app.render();
  },
  render: function() {
    $('.project-header').append(projectNavMenu);
    $('.project-header').append(projectLearnMenu);
    $('.project-header').append(projectSearch);
  }
};
module.exports = app;
