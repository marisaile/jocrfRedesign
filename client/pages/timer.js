import $ from 'jquery';
  
var app = {
  init: function(){
    app.render();
  },
  render: function(){
    var startTime; 
    var interval;
    var endTime;
    var timeDifference;
    var splitTime;
    var hundredths;
    var seconds;
    var minutes;
    var updateTimer = function() {
      endTime = new Date();
      timeDifference = (endTime - startTime) / 1000;
      hundredths = Math.floor(timeDifference * 10) % 100;
      seconds = Math.floor(timeDifference % 60);
      minutes = Math.floor(timeDifference / 60);
      if (hundredths < 10) {
        hundredths = '0' + hundredths;
      }
      if (seconds < 10) { 
        seconds = '0' + seconds; // converting from a number to a string
      }
      if (minutes < 10) {
        minutes = '0' + minutes; // converting to a string
      }
      $('.counter').html(minutes + ':' + seconds + '.' + hundredths);
    };  
    var startTimer = function() {
      startTime = new Date();
      interval = setInterval(updateTimer, 100);
    };
    $('.timer-container .start-button').on('click', startTimer);
    var splitTimer = function() {
      splitTime = $('.timer-container .split-time').append('<br />' + minutes + ':' + seconds + '.' + hundredths); 
      var lapTime = (timeDifference - splitTime);
      $('.timer-container .lap-time').append('<br />' + lapTime);
    };
    $('.timer-container .split-button').on('click', splitTimer);
    var resetTimer = function() {
      $('.counter').html('00' + ':' + '00' + '.' + '00' );
      $('.timer-container .split-time').html( '' );
    };
    $('.timer-container .reset-button').on('click', resetTimer);
    var stopTimer = function(){
      interval = clearInterval(interval);
    };
    $('.timer-container .stop-button').on('click', stopTimer);
  }
};

module.exports = app;


