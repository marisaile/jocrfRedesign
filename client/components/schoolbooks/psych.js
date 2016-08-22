var $ = require('jquery');

// legacy loading for bootstrap
window.jQuery = window.$ = $;
require('bootstrap');

import psych from 'templates/school/psych.html';
import header from 'components/schoolbooks/header';

var app = {
  init: function(){
    app.render();
  },
  render: function(){
    $('.school-main').html(psych);
  }
};

module.exports = app;

