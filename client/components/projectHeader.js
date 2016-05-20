var $ = require('jquery');

// legacy loading for bootstrap
window.jQuery = window.$ = $;
require('bootstrap');

import projectNavMenu from 'components/projectNavMenu';
import projectHeaderImage from 'components/projectHeaderImage';
import projectSearch from 'components/projectSearch';

var app = {
  init: function() {
    app.render();
  },
  render: function() {

    projectNavMenu.init();
    projectHeaderImage.init();
    projectSearch.init();
  }
};
module.exports = app;
