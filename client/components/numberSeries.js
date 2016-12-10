import $ from 'jquery';

var points = 0;
var app = {
  init: function(){
    app.render();
  },
  render: function(){
    $('.start-ns').click(function(e){
      e.preventDefault();
      $('.instructions-container-ns').html('');
      $('.ns-items').removeClass('hidden');    
    });
    $('.submit-responses-ns').click(function(e){
      e.preventDefault();
      if ($('.one').val() === '17') {
        points++;
      } if ($('.two').val() === '5') {
        points++;
      } if ($('.three').val() === '42') {
        points++;
      } if ($('.four').val() === '11') {
        points++;
      } if ($('.five').val() === '21') {
        points++;
      }
      $('.number-series-container').html('You got' + ' ' + points + ' ' + 'correct!');
    });
  }
};  

module.exports = app;