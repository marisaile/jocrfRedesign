import $ from 'jquery';
import moment from 'moment';

var startTime;

function timer(){
  var now = moment();
  var timeDiff = (now - startTime) / 1000;
  var minutes = Math.floor(timeDiff / 60);
  var hundredths = Math.floor(timeDiff / 0.6) % 100;
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (hundredths < 10) {
    hundredths = '0' + hundredths;
  }
  now = (minutes + '.' + hundredths);
  $('.timer').html(now);
};

module.exports = timer;