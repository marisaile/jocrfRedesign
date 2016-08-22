var $ = require('jquery');

// legacy loading for bootstrap
window.jQuery = window.$ = $;
require('bootstrap');

import english from 'templates/school/englishLit.html';
import header from 'components/schoolbooks/header';

var app = {
  init: function(){
    app.render();
  },
  render: function(){
  	$('.school-main').html(english);
  }
};

module.exports = app;


