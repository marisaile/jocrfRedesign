import $ from 'jquery';
import splitTimes from 'pages/timer.js';
var points;

var app = {
  init: function(){
    app.render();
  },
  render: function(){
    splitTimes.forEach(time, function(){
      if (time < 10) {
        points = 3;
      } else if (10 < time < 20) {
        points = 2;
      } else if (20 < time < 30){
        points = 1;
      } else {
        points = 0;
      }
    });
  }
};

module.exports = app;
