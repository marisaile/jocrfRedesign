var $ = require('jquery');

// legacy loading for bootstrap
window.jQuery = window.$ = $;
require('bootstrap');

var letters = 'ABCDEFGHIJKLMNOPRSTVY';
var startsWith = letters[Math.floor(Math.random() * letters.length)];
var points = 0;

var app = {
  init: function(){
    $('#gameInstructions').modal();
    app.render();
  },
  render: function(){
    $('.roll-die').click(function(){
      $('.letter-is').html('Your letter is' + '&nbsp &nbsp' + startsWith);
      setTimeout(function(){
        $('.letter-is').html('Time\'s Up!');
          app.scoreGame();
      }, 50000);
    });
  },
  scoreGame: function(){
    $('input[class=answer').each(function(){
      var $answer = $(this).val();
      if ($answer = /^startsWith\w+ \s^startsWith\w+/) {
        points++
      }
    });
    
    console.log(points);
  }
};

module.exports = app; 