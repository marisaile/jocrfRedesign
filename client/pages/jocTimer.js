import $ from 'jquery';




import timerGen from 'templates/genericTimer.html';
import generic from 'components/timerGen';

import timerTD from 'templates/tweezerTimer.html';
import tweezer from 'components/timerTD';

import timerObs from 'templates/observationTimer.html';
import observation from 'components/timerObs';

var app = {
  init: function(){
      app.render();
  },
  render: function(){
    $('.stopwatch-container').html(timerObs);
    observation.init();
  }
};

module.exports = app;