import $ from 'jquery';
import header from 'templates/workPage.html';

import timerGen from 'templates/genericTimer.html';
import generic from 'components/timerGen';

import timerTD from 'templates/tweezerTimer.html';
import tweezer from 'components/timerTD';

import timerObs from 'templates/observationTimer.html';
import observation from 'components/timerObs';

var app = {
  init: function(){
    app.render();
    app.timer();
  },
  render: function(){
    app.bindClickEvents();
    $('.sections-work').html(header);
    $('#slideshow > div:gt(0)').hide();
    setInterval(function() { 
      $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
    }, 3000);
  }, 
  timer: function(){
    $('.stopwatch-container').html(timerGen);
    generic.init();
  },
  showTweezer: function(){
    $('.tweezer').on('click', function(){
      $('.stopwatch-container').html(timerTD);
      tweezer.init();
    });
  },
  showObservation: function(){
    $('.observation').on('click', function(){
      $('.stopwatch-container').html(timerObs);
      observation.init();
    });
  },
  bindClickEvents(){
    app.showTweezer();
    app.showObservation();
  }
};  

module.exports = app;
