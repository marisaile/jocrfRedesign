var $ = require('jquery');

// legacy loading for bootstrap
window.jQuery = window.$ = $;
require('bootstrap');

import history from 'templates/school/history.html';
import header from 'components/schoolbooks/header';

var app = {
  init: function(){
    app.render();
  },
  render: function(){
    $('.school-main').html(history);
  }
};

module.exports = app;
