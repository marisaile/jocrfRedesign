var $ = require('jquery');

// legacy loading for bootstrap
window.jQuery = window.$ = $;
require('bootstrap');
import polisci from 'templates/school/polisci.html';
import english from 'components/schoolbooks/english';
import history from 'components/schoolbooks/history';
import math from 'components/schoolbooks/math';
import psych from 'components/schoolbooks/psych';
import science from 'components/schoolbooks/science';
import landing from 'components/schoolbooks/landing';
import header from 'components/schoolbooks/header';

var app =  {
  init: function(){
    app.render();
  },
  render: function(){
  	header.init();
    $('.response-container').html(polisci);
  }
};

module.exports = app;

