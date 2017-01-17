
import $ from 'jquery';
import moment from 'moment';

// // var timerRunning = false;
// // var interval;
// // var startTime; 

// var app = {
//   init: function(){
//     app.render();
//   },
//   render: function(){
    
//     // app.bindClickEvents();
//   },
//   updateTimer: function(){
    
//   }
//   // startTimer: function(){
//   //   var $startStop = $('.start-stop-button');
//   //   $startStop.on('click', function(){
//   //     if (timerRunning === false) {
//   //       startTime = moment();
//   //       timerRunning = true;
//   //       interval = setInterval(app.updateTimer, 150);
//   //       $startStop.html('Stop');
//   //       $startStop.css({
//   //         'background-color': '#19284B'
//   //       });
//   //     } else {
//   //       timerRunning = false;
//   //       $startStop.html('Start');
//   //       $startStop.css({
//   //         'background-color': '#17B20A'
//   //       });
//   //       interval = clearInterval(interval);
//   //       // splitTimes.push(now);
//   //     }
//   //   });
//   // },
//   // bindClickEvents: function(){
//   //   app.startTimer();
//   // }
// };

module.exports = {
  now: moment();
  timeDiff: (now - startTime) / 1000;
  minutes: Math.floor(timeDiff / 60);
  hundredths: Math.floor(timeDiff / 0.6) % 100;
  updateTimer: function(){
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (hundredths < 10) {
      hundredths = '0' + hundredths;
    }
    now = (minutes + '.' + hundredths);
    $('.timer').html(now);
  } 
};
    


















// var interval; 
// var splitCount = 0;
// var cumCount = 0;
// var timerRunning = false; 
// var splitTimes = [];
// var points;
// var pointsArray = [];

// var app = {
//   init: function(){
//     app.render();
//   }, 
//   render: function(){
//     app.bindClickEvents(); 
//   },
//   startTimer: function(){
//     var $startStop = $('.start-stop-button');
//     $startStop.on('click', function(){
//       if ($startStop.html() === 'Start') {
//         if (timerRunning === false) {
//           timerRunning = true;
//         }
//         interval = setInterval(function(){
//           splitCount++;
//           var splitCountText = splitCount.toString();
//           if (splitCountText.length < 2) {
//             splitCountText = '.0' + splitCount;
//           } else if (splitCountText.length > 2) {
//             splitCountText = splitCountText.slice(0, 1) + '.' + splitCountText.slice(1, 3);
//           } else {
//             splitCountText = '.' + splitCount;
//           }
//           $('.split-counter').html('Individual Time: ' + splitCountText);
//           cumCount++;
//           var cumText = cumCount.toString();
//           if (cumText.length < 2) {
//             cumText = '.0' + cumText;
//           } else if (cumText.length > 2) {
//             cumText = cumText.slice(0, 1) + '.' + cumText.slice(1, 3);
//           } else {
//             cumText = '.' + cumText;
//           }
//           $('.cum-counter').html('Cumulative Time: ' + cumText);
//         }, 600);
//         $startStop.html('Stop');
//         $startStop.css({'background-color': '#19284B'});
//       } else {
//         app.stopTimer();
//         $startStop.html('Start');
//         $startStop.css({'background-color': '#17B20A'});
//       }
//     });   
//   },
//   stopTimer: function(){
//     interval = clearInterval(interval);
//     if (timerRunning === true) {
//       timerRunning = false;
//     }
//     splitTimes.push(splitCount);
//     splitCount = 0;
//   },
//   splitTimer: function(){  
//     var $split = $('.misc-button');
//     $split.on('click', function(){
//       splitTimes.push(splitCount);
//       splitCount = 0;
//     });     
//   },
//   resetTimer: function(){
//     var $reset = $('.reset-button');
//     $reset.on('click', function(){
//       if (timerRunning === false) {
//         app.clearEverything(); 
//       } 
//     });   
//   },
//   clearEverything: function(){
//     splitTimes = [];
//     pointsArray = [];
//     splitCount = 0;
//     cumCount = 0;

//     $('.time-col').html('<h1>Times</h1');
//     $('.points-col').html('<h1>Points</h1>');
//     $('.split-counter').html('Individual Time: ' + '.0' + splitCount);
//     $('.cum-counter').html('Cumulative Time: ' + '.0' + cumCount);
//     $('.score').html('');
//   },
//   bindClickEvents: function(){
//     app.startTimer();
//     app.splitTimer();
//     app.resetTimer();
//   }
// };
// module.exports = app;




     