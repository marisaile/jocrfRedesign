var $ = require('jquery');

window.$ = $;
require('jquery.easing');

import silograms from 'components/silograms';
import numberSeries from 'components/numberSeries';

var app = {
  init: function(){
    app.render();
  },
  render: function(){
    $('.show-silograms').click(function(e){
      e.preventDefault();
      if ($('.silograms-container').is(':hidden')) {
        $('.silograms-container').slideDown(600, 'easeOutExpo');
        silograms.init();
      } else {
        $('.silograms-container').slideUp(600, 'easeOutExpo');
      }
    });
    $('.show-number-series').click(function(e){
      e.preventDefault();
      if ($('.number-series-container').is(':hidden')) {
        $('.number-series-container').slideDown(600, 'easeOutExpo');
        numberSeries.init();
      } else {
        $('.number-series-container').slideUp(600, 'easeOutExpo');
      }
    }); 
  }
};  

module.exports = app;


