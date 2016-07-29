import $ from 'jquery';

var startTime; 
var interval; 
var minutes;
var hundredths;
var endTime;
var timeDifference;  
var splitTimes = [];
var app = {
  init: function(){
    app.render();
  },
  render: function(){
    var updateTimer = function() {
      endTime = new Date();
      timeDifference = (endTime - startTime) / 1000;
      minutes = Math.floor(timeDifference / 60); 
      hundredths = Math.floor(timeDifference / 0.6) % 100;
      if (minutes < 10) {
        minutes = '0' + minutes; //converting to a string
      }
      if (hundredths < 10) { 
        hundredths = '0' + hundredths; //converting to a string
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
    };
    var splitTimer = function(){
      var cumTime = endTime;
      $('.timer-container .cum-time').append('<br />' + cumTime);     
    };
    var resetTimer = function(){
      $('.counter').html('00' + '.' + '00' );
      $('.timer-container .cum-time').html( 'Cumulative Time' + ' ' );
    };
    $('.timer-container .start-stop-button').on('click', function(){
      if ($('.start-stop-button').html() === 'start') {
        startTimer();
        $('.start-stop-button').html('stop');
      } else {
        stopTimer();
        $('.start-stop-button').html('start');
      }
    }); 
    $('.timer-container .split-button').on('click', splitTimer);
    $('.timer-container .reset-button').on('click', resetTimer);
  }
};

module.exports = app;


