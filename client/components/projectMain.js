var $ = require('jquery');

// legacy loading for bootstrap
window.jQuery = window.$ = $;
require('bootstrap');

import projectMain from 'templates/projectMain.html';
import projectMainCarousel from 'components/projectMainCarousel';

var app = {
  init: function() {
    app.render();
  },
  render: function() {
    $('.project-main').append(projectMain);
    projectMainCarousel.init();
  }
};

module.exports = app;
