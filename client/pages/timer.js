import $ from 'jquery';
import mode from 'templates/timer-mode.html';
import timerContinuous from 'components/timerContinuous';
import timerStartStop from 'components/timerStartStop';

var app = {
  init: function(){
    app.render();
  },
  render: function(){
    $('.timer-container').html(mode);
    app.mode();
  },
  mode: function(){
    $('.btn-mode-continuous').on('click', function(){
      timerContinuous.init();
    });
    $('.btn-mode-start-stop').on('click', function(){
      timerStartStop.init();
    });
  }
};

module.exports = app;


