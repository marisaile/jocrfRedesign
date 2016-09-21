import $ from 'jquery';

var points;

var app = {
  init: function(){
    app.render();
  },
  render: function(){
    if (splitTimes[index] < 10) {
      points = 3;
    } else if (splitTimes[index] > 9 && splitTimes[index] < 20) {
      points = 2;
    } else if (splitTimes[index] > 19 && splitTimes[index] < 30){
      points = 1;
    } else {
      points = 0;
    }
    $('.points-col').append(points + '<br />');
  }
};

module.exports = app;
