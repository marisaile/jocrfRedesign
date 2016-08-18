var $ = require('jquery');

// legacy loading for bootstrap
window.jQuery = window.$ = $;
require('bootstrap');
import science from 'templates/school/science.html';
import english from 'components/schoolbooks/english';
import history from 'components/schoolbooks/history';
import math from 'components/schoolbooks/math';
import polisci from 'components/schoolbooks/polisci';
import psych from 'components/schoolbooks/psych';
import landing from 'components/schoolbooks/landing';
import header from 'components/schoolbooks/header';

var app = {
  init: function(){
    app.render();
  },
  render: function(){
  	header.init();
    $('.response-container').html(science);
  }
};

module.exports = app;