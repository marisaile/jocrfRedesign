import $ from 'jquery';
import _ from 'underscore';

var app = {
  init: function(){
    app.render();
  }, 
  render: function(){
    $('.stopwatch').each(function(){
      var element = $(this);
      var running = element.data('autostart');
      var minutesElement = element.find('.minutes');
      var hundredthsElement = element.find('.hundredths');
      var toggleElement = element.find('.toggle');
      var resetElement = element.find('.reset');
      var pauseText = toggleElement.data('pausetext');
      var resumeText = toggleElement.data('resumetext');
      var splitElement = element.find('.split');
      var startText = toggleElement.text();
      var minutes, hundredths, timer;
      var splitTimes = [];

      function prependZero(time, length){
        time = '' + (time | 0);
        while (time.length < length) time = '0' + time;
        return time;
      };
      function setStopwatch(minutes, hundredths) {
        minutesElement.text(prependZero(minutes, 2));
        hundredthsElement.text(prependZero(hundredths, 2));
      };
      function runTimer(){      
        var startTime = Date.now();
        var prevMinutes = minutes;
        var prevHundredths = hundredths;
        timer = setInterval(function () {
          var timeElapsed = Date.now() - startTime;  
          minutes = ((timeElapsed / 60000) + prevMinutes) % 60;
          hundredths = ((timeElapsed / 1000 / 0.6) + prevHundredths) % 100;
          setStopwatch(minutes, hundredths);
        }, 50);
      };
      function run(){
        running = true;
        runTimer();
        toggleElement.text(pauseText);
      };
      function pause(){
        running = false;
        clearTimeout(timer);
        var cumMinutes = $('.minutes').html();
        var cumHundredths = $('.hundredths').html();
        var endTime = (cumMinutes + '.' + cumHundredths);
        var cumTime = Math.round(endTime * 100);
        $('.stopwatch-container .cum-time').append('<br />' + cumTime);      
        splitTimes.push(cumTime); 
        // var indTime = Math.round(splitTimes[1] - splitTimes[0]);
        // $('.stopwatch-container .ind-time').append('<br />' + indTime);   
        // splitTimes.splice(0, 1);
        // toggleElement.text(resumeText);
      };
      function reset(){
        running = false;
        pause();
        $('.stopwatch-container .cum-time').html( 'Cumulative Time' + ' ' );
        $('.stopwatch-container .ind-time').html( 'Individual Time' + ' ' );
        minutes = hundredths = 0;
        setStopwatch(minutes, hundredths);
        toggleElement.text(startText);
      };
      function split(){
        var cumMinutes = $('.minutes').html();
        var cumHundredths = $('.hundredths').html();
        var endTime = (cumMinutes + '.' + cumHundredths);
        var cumTime = Math.round(endTime * 100);
        $('.stopwatch-container .cum-time').append('<br />' + cumTime);      
        splitTimes.push(cumTime); 

        // var indTime = Math.round(splitTimes[1] - splitTimes[0]);
        // $('.stopwatch-container .ind-time').append('<br />' + indTime);   
        // splitTimes.splice(0, 1);
      };
      function getIndTimes(){
        _.map(splitTimes, function(x, y){
          return (x - y);
        });
      };
      toggleElement.on('click', function (){
        (running) ? pause() : run();
      });
      resetElement.on('click', function (){
         reset();
      });
      splitElement.on('click', function(){
        split();
      });
      $('.btn.ind-time').click(function(){
         getIndTimes();
        // $('.individual_times').html(indTimes);
      });
        reset();
        if(running) run();
      });
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