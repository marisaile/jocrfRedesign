import $ from 'jquery';
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
        $('.silograms-container').slideDown('slow');
        silograms.init();
      } else {
        $('.silograms-container').slideUp('slow');
      }
    });
    $('.show-number-series').click(function(e){
      e.preventDefault();
      if ($('.number-series-container').is(':hidden')) {
        $('.number-series-container').slideDown('slow');
        silograms.init();
      } else {
        $('.number-series-container').slideUp('slow');
      }
    }); 
  }
};  

module.exports = app;


