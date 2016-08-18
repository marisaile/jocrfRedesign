var $ = require('jquery');

// legacy loading for bootstrap
window.jQuery = window.$ = $;
require('bootstrap');

import header from 'templates/school/bookPageHeader.html';
import english from 'components/schoolbooks/english';
import history from 'components/schoolbooks/history';
import math from 'components/schoolbooks/math';
import polisci from 'components/schoolbooks/polisci';
import psych from 'components/schoolbooks/psych';
import science from 'components/schoolbooks/science';
import landing from 'components/schoolbooks/landing';

var app = {
  init: function(){
    app.render();
  },
  render: function(){
  	$('.school-main').prepend(header);
  	$('.english').click(function(){
      english.init();
    });
    $('.history').click(function(){
      history.init();
    });
    $('.math').click(function(){
      math.init();
    });
    $('.politics').click(function(){
      polisci.init();
    });
    $('.psych').click(function(){
      psych.init();
    });
    $('.science').click(function(){
      science.init();
    });
    $('.home').click(function(){
      landing.init();
    });
  }
};

module.exports = app;