var $ = require('jquery');

// legacy loading for bootstrap
window.jQuery = window.$ = $;
require('bootstrap');
import moment from 'moment';

var letters = 'ABCDEFGHIJKLMNOPRSTW';
var startsWith = letters[Math.floor(Math.random() * letters.length)];
var contains = /^startsWith\w+ \sstartsWith\w+/;
var points = 0
var secondsRemaining = 90;
// import CountdownTimer from 'components/scattergoriesCountdown';

var app = {
  init: function(){
    $('#gameInstructions').modal();
    app.render();
  },
  render: function(){
    $('#scattergoriesTimer').html(secondsRemaining);
    $('.roll-die').click(function(){
      $('.letter-is').html('Your letter is' + '&nbsp &nbsp' + startsWith);
      setInterval(function(){
        secondsRemaining--;
        var secondsRemainingText = secondsRemaining.toString();
        if (secondsRemaining >= 0) {
          $('#scattergoriesTimer').html('Time Remaining' + secondsRemainingText);
        } else {
          $('#scattergoriesTimer').html('Time\'s Up!');
        }
      }, 1000);
    });
  },
  scoreGame: function(){
    $('input[class=answer').each(function(){
      var $answer = $(this).val();
      if ($answer === contains) {
        points++;
      }
    });
    console.log(points);
  }
};

module.exports = app; 
