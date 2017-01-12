
import $ from 'jquery';
import 'styles/main.scss';

import tweezer from 'pages/timerTD';
import observation from 'pages/timerObs';

$(function() {

  var url = window.location.pathname;

  switch (url) {
    case '/pages/tweezerTimer.html':
      tweezer.init();
    break;
    case '/pages/observationTimer.html':
      observation.init();
    break;
    default: break;
  }
});
