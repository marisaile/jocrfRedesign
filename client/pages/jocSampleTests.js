import $ from 'jquery';
import silograms from 'components/silograms';


var points = 0;
var app = {
  init: function(){
    app.render();
  },
  render: function(){
    app.showSilograms();
    app.showNumberSeries();
  },
  showSilograms: function(){
    $('.show-silograms').click(function(e){
      e.preventDefault();
      $('.silograms-container').slideDown(1000);
      silograms.init();
    });
  }, 
  showNumberSeries: function(){
    $('.show-number-series').click(function(e){
      e.preventDefault();
      $('.number-series-container').slideDown(1000);
    });
  }
};  

module.exports = app;
