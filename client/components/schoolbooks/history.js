var $ = require('jquery');

// legacy loading for bootstrap
window.jQuery = window.$ = $;
require('bootstrap');
import history from 'templates/school/history.html';
import english from 'components/schoolbooks/english';
import math from 'components/schoolbooks/math';
import polisci from 'components/schoolbooks/polisci';
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
    $('.response-container').html(history);
  }
};

module.exports = app;
