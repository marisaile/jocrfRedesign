import $ from 'jquery';
import timer from 'templates/timer-start-stop.html';

var startTime; 
var interval; 
var minutes;
var hundredths;
var endTime;
var timeDifference;  
var splitTimes = [0];
var app = {
  init: function(){
    app.render();
  },
  render: function(){
    $('.timer-container').html(timer);
    var updateTimer = function() {
      endTime = new Date();
      timeDifference = (endTime - startTime) / 1000;
      minutes = Math.floor(timeDifference / 60); 
      hundredths = Math.floor(timeDifference / 0.6) % 100;
      if (minutes < 10) {
        minutes = '0' + minutes; // converting to a string
      }
      if (hundredths < 10) { 
        hundredths = '0' + hundredths; // converting to a string
      }
      endTime = (minutes + '.' + hundredths);
      $('.counter').html(endTime);
    };
    var startTimer = function(){
      startTime = new Date();
      interval = setInterval(updateTimer, 100);
    };
    var stopTimer = function(){
      interval = clearInterval(interval);
      var indTime = Math.round(endTime * 100);
      $('.timer-container .time').append('<br />' + indTime);
      splitTimes.push(indTime);
      $('.counter').html('00' + '.' + '00' );
    };
    // var splitTimer = function(){
    //   var cumTime = Math.round(endTime * 100);
    //   $('.timer-container .cum-time').append('<br />' + cumTime);  
    //   splitTimes.push(cumTime); 
    // };
    // var indTimes = function(){
    //   _.map(splitTimes, function(){
    //     var indTime = Math.round(splitTimes[1] - splitTimes[0]);
    //     $('.timer-container .ind-time').append('<br />' + indTime);   
    //     splitTimes.splice(0, 1);
    //   });
    // };
    var resetTimer = function(){
      $('.counter').html('00' + '.' + '00' );
      // $('.timer-container .cum-time').html( 'Cumulative Time' + ' ' );
      $('.timer-container .time').html( 'Time' + ' ' );
    };
    $('.timer-container .ss-start-stop-button').on('click', function(){
      if ($('.ss-start-stop-button').html() === 'start') {
        startTimer();
        $('.ss-start-stop-button').html('stop');
      } else {
        stopTimer();
        $('.ss-start-stop-button').html('start');
      }
    }); 
    // $('.timer-container .split-button').on('click', splitTimer);
    $('.timer-container .ss-reset-button').on('click', resetTimer);
  }
};

module.exports = app;

