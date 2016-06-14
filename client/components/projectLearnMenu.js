
var $ = require('jquery');

// legacy loading for bootstrap
window.jQuery = window.$ = $;
require('bootstrap');
require('jquery.easing');
import _ from 'underscore';
import projectNavMenu from 'templates/projectNavMenu.html';

var app = {
  init: function() {
    app.render();
  },
  render: function() {
    $('.project-header').append(projectNavMenu);

    $('li.learn-nav.crocodile img').mouseover(function(){
      $('li.learn-nav.crocodile img').animate({
        width: 75,
        height: 75,
        top: 70
      }, 500, 'easeOutBack');
    });
    $('li.learn-nav.crocodile img').mouseout(function(){
      $('li.learn-nav.crocodile img').animate({
        width: 75,
        height: 75,
        top: 0
      }, 500, 'easeInBack');
    });
    $('li.learn-nav.lizard img').mouseover(function(){
      $('li.learn-nav.lizard img').animate({
        width: 60,
        height: 60,
        top: 70
      }, 500, 'easeOutBack');
    });
    $('li.learn-nav.lizard img').mouseout(function(){
      $('li.learn-nav.lizard img').animate({
        width: 50,
        height: 50,
        top: 0
      }, 500, 'easeInBack');
    });
    $('li.learn-nav.frog img').mouseover(function(){
      $('li.learn-nav.frog img').animate({
        width: 60,
        height: 60,
        top: 70
      }, 500, 'easeOutBack');
    });
    $('li.learn-nav.frog img').mouseout(function(){
      $('li.learn-nav.frog img').animate({
        width: 50,
        height: 50,
        top: 0
      }, 500, 'easeInBack');
    });
    $('li.learn-nav.turtle img').mouseover(function(){
      $('li.learn-nav.turtle img').animate({
        width: 60,
        height: 60,
        top: 70
      }, 500, 'easeOutBack');
    });
    $('li.learn-nav.turtle img').mouseout(function(){
      $('li.learn-nav.turtle img').animate({
        width: 50,
        height: 50,
        top: 0
      }, 500, 'easeInBack');
    });
    $('li.learn-nav.snake img').mouseover(function(){
      $('li.learn-nav.snake img').animate({
        width: 60,
        height: 60,
        top: 70
      }, 500, 'easeOutBack');
    });
    $('li.learn-nav.snake img').mouseout(function(){
      $('li.learn-nav.snake img').animate({
        width: 50,
        height: 50,
        top: 0
      }, 500, 'easeInBack');
    });
  }
};

module.exports = app;
