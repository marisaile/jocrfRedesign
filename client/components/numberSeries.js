import $ from 'jquery';

var points = 0;
var app = {
  init: function(){
    app.render();
  },
  render: function(){
    $('.submit-responses-ns').on('click', function(e){
      e.preventDefault();
      if ($('.one').val() === '4') {
        points++;
      } if ($('.two').val() === '8') {
        points++;
      } if ($('.three').val() === '15') {
        points++;
      } if ($('.four').val() === '16') {
        points++;
      } if ($('.five').val() === '23') {
        points++;
      } if ($('.six').val() === '42') {
        points++;
      }
      $('.ns-items').html('You got' + ' ' + points + ' ' + 'correct!');
    });
  }
};  

module.exports = app;