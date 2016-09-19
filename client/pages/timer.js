import $ from 'jquery';
import _ from 'underscore';

var interval; 
var endTime;
var startTime;
var timeDifference;
var minutes;
var hundredths;
var splitCount = 0;
var cumCount = 0;
// var timerRunning = false; 
var splitTimes = [];
var index = 0;

var app = {
  init: function(){
    app.render();
  }, 
  render: function(){
    app.bindClickEvents(); 
  },
  startTimer: function(){
    var $startStop = $('.start-stop-button');
    $startStop.on('click', function(){
      if ($startStop.html() === 'start') { 
        // timerRunning = true;
        startTime = new Date();
        interval = setInterval(function(){
          splitCount++
          $('.split-counter').html('Ind. Time: ' + splitCount);
          cumCount++
          $('.cum-counter').html('Cum. Time: ' + cumCount);
        }, 600);
        $startStop.html('stop');
        $startStop.css({'background-color': '#FF2603'});
      } else {
        app.stopTimer();
        $startStop.html('start');
        $startStop.css({'background-color': '#01C700'})
      }
    });   
  },
  stopTimer: function(){
    interval = clearInterval(interval);
    // timerRunning = false;
    splitTimes.push(splitCount);
    splitCount = 0;
    app.displayTimes();
  },
  splitTimer: function(){  
    var $split = $('.split-button');
    $split.on('click', function(){
      splitTimes.push(splitCount); 
      splitCount = 0;
      app.displayTimes();
    });     
  },
  resetTimer: function(){
    var $reset = $('.reset-button');
    $reset.on('click', function(){
      interval = clearInterval(interval);
      // timerRunning = false;
      splitCount = 0;
      cumCount = 0;
      splitTimes = [];
      $('.times').html('Times');
      $('.split-counter').html('Ind. Time: ' + splitCount);
      $('.cum-counter').html('Cum. Time: ' + cumCount);
    });   
  },
  displayTimes: function(){
    $('.times').append('Item ' + '' + (index + 1) + ': ' + ' ' + splitTimes[index] + '<br />'); 
    index++;
  },
  bindClickEvents: function(){
    app.startTimer();
    app.splitTimer();
    app.resetTimer();
  }
};

module.exports = app;
















// var startTime; 
// var interval; 
// var minutes;
// var hundredths;
// var endTime;
// var timeDifference;  
// var splitTimes = [0];

// var app = {
//   init: function(){
//     app.render();
//   },
//   render: function(){
//     var updateTimer = function() {
//       endTime = new Date();
//       timeDifference = (endTime - startTime) / 1000;
//       minutes = Math.floor(timeDifference / 60);
//       hundredths = Math.floor(timeDifference / 0.6) % 100;
//       if (minutes < 10) {
//         minutes = '0' + minutes; //converting to a string
//       }
//       if (hundredths < 10) { 
//         hundredths = '0' + hundredths; //converting to a string
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
//       $('.counter').html('00' + '.' + '00' );
//       $('.timer-container .cum-time').html( 'Cumulative Time' + ' ' );
//       $('.timer-container .ind-time').html( 'Individual Time' + ' ' );
//     };
//     $('.timer-container .start-stop-button').on('click', function(){
//       if ($('.start-stop-button').html() === 'start') {
//         startTimer();
//         $('.start-stop-button').html('stop');
//       } else {
//         stopTimer();
//         $('.start-stop-button').html('start');
//       }
//       splitTimes = [0];
//     }); 
//     $('.timer-container .split-button').on('click', splitTimer);
//     $('.timer-container .reset-button').on('click', resetTimer);
//   }
// };

// module.exports = app;

//     