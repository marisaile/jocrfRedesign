import $ from 'jquery';

var points;

var app = {
  init: function(){
    app.render();
  },
  render: function(){
  switch(splitTimes[index]) {
      case < 32: 
        points = 8;
      break;
      case 33 || 34: 
        points = 7;
      break;
      case 35 || 36;
        points = 6;
      break;
      case 37 || 38:
        points = 5;
      break;
      case 39 || 40:
        points = 4;
      break; 
      case 41 || 42 || 43:
        points = 3;
      break;
      case > 43 && < 48:
        points = 2;
      break;
      case > 47: 
        points = 1;
      break;
      default: 
      break;
    }
  },
  droppedPin: function(){
    $('.dropped-pin').on('click', function(){
      extraPoints = 5;
    });
  }
};

module.exports = app;

