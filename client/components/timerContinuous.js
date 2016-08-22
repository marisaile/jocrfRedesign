import $ from 'jquery';
import timer from 'templates/timer-continuous.html';

var minutes;
var hundredths;
var prevMinutes;
var prevHundredths;
var endTime;
var startTime;
var interval;
var isPaused = false;
var timeDifference;
var lapCount = [];

var app = {
  init: function(){
    app.render();
  },
  render: function(){
    app.timerInit();
    $('.start-button').on('click', function(){
      if ($('.start-button').html() === 'start') {
        app.runTimer();
        $('.start-button').html('pause');
      } else if ($('.start-button').html() === 'pause') {
        app.pauseTimer();
        $('.start-button').html('resume');
      } else {
        app.resumeTimer();
        $('.start-button').html('pause');
      }        
    }); 
  },
  timerInit: function(){
    $('.timer-container').html(timer);
    $('.counter').html('00' + '.' + '00');
    prevMinutes = 0;
    prevHundredths = 0;
  },
  runTimer: function(){
    startTime = Date.now();
    interval = setInterval(function(){
      timeDifference = Date.now() - startTime;
      minutes = Math.floor((timeDifference / 1000 / 60) + prevMinutes) % 60;
      hundredths = Math.floor((timeDifference / 1000 / 0.6) + prevHundredths) % 100;
      if (minutes < 10) {
        minutes = '0' + minutes; // converting to a string
      }
      if (hundredths < 10) { 
        hundredths = '0' + hundredths; // converting to a string
      }
      $('.counter').html(minutes + '.' + hundredths); 
    }, 100);
  },
  pauseTimer: function(){
    clearInterval(interval);
  },
  resumeTimer: function(){
    prevMinutes = minutes; 
    prevHundredths = hundredths;
  }
};


// var startTime; 
// var interval; 
// var minutes;
// var hundredths;
// var endTime;
// var timeDifference;  
// var lapCount = [0];
// var app = {
//   init: function(){
//     app.render();
//   },
//   render: function(){
//     $('.timer-container').html(timer);
//     var updateTimer = function(){
//       endTime = new Date();
//       timeDifference = (endTime - startTime) / 1000;
//       minutes = Math.floor(timeDifference / 60); 
//       hundredths = Math.floor(timeDifference / 0.6) % 100;
//       if (minutes < 10) {
//         minutes = '0' + minutes; // converting to a string
//       }
//       if (hundredths < 10) { 
//         hundredths = '0' + hundredths; // converting to a string
//       }
//       endTime = (minutes + '.' + hundredths);
//       $('.counter').html(endTime);
//     };
//     var startTimer = function(){
//       startTime = new Date();
//       interval = setInterval(updateTimer, 100);
//     };
//     var stopTimer = function(){
//       interval = clearInterval(interval);
//     };
//     var splitTimer = function(){
//       var cumTime = Math.round(endTime * 100);
//       $('.timer-container .cum-time').append('<br />' + cumTime);  
//       splitTimes.push(cumTime); 
//       var indTime = Math.round(splitTimes[1] - splitTimes[0]);
//       $('.timer-container .ind-time').append('<br />' + indTime);   
//       splitTimes.splice(0, 1);
//     };
//     var resetTimer = function(){
//       interval = clearInterval(interval);
//       $('.counter').html('00' + '.' + '00' );
//       $('.timer-container .cum-time').html( 'Cumulative Time' + ' ' );
//       $('.timer-container .ind-time').html( 'Individual Time' + ' ' );
//     };
//     $('.timer-container .start-stop-button').on('click', function(){
//       if ($('.start-stop-button').html() === 'start') {
//         // startTimer();
//         $('.start-stop-button').html('stop');
//       } else {
//         // stopTimer();
//         $('.start-stop-button').html('start');
//       }
//     }); 
//     $('.timer-container .split-button').on('click', splitTimer);
//     $('.timer-container .reset-button').on('click', resetTimer);
//   }


module.exports = app;

