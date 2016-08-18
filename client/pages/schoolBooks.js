var $ = require('jquery');

// legacy loading for bootstrap
window.jQuery = window.$ = $;
require('bootstrap');
import landing from 'templates/school/schoolBooksLanding.html';

import english from 'components/schoolbooks/english';
import history from 'components/schoolbooks/history';
import math from 'components/schoolbooks/math';
import polisci from 'components/schoolbooks/polisci';
import psych from 'components/schoolbooks/psych';
import science from 'components/schoolbooks/science';

var app = {
  init: function(){
    app.render();
  },
  render: function(){
    $('.response-container').html(landing);
    $('.eng').click(function(){
      english.init();
    });
    $('.his').click(function(){
      history.init();
    });
    $('.math').click(function(){
      math.init();
    });
    $('.pol').click(function(){
      polisci.init();
    });
    $('.psy').click(function(){
      psych.init();
    });
    $('.sci').click(function(){
      science.init();
    });
  }
};

module.exports = app;
