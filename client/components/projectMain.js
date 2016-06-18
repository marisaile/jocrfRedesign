var $ = require('jquery');
window.jQuery = window.$ = $;
require('bootstrap');

import projectMain from 'templates/projectMain.html';
import projectLearnMenu from 'components/projectLearnMenu';

var app = {
  init: function() {
    app.render();
  },
  render: function() { 
    projectLearnMenu.init();
  }
};

module.exports = app;
