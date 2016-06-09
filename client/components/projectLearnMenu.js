
var $ = require('jquery');

// legacy loading for bootstrap
window.jQuery = window.$ = $;
require('bootstrap');
require('jquery.easing');
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
      // $('.learn-nav.crocodile img').append('crocodiles!');
    });
    $('li.learn-nav.crocodile img').mouseout(function(){
      $('li.learn-nav.crocodile img').animate({
        width: 75,
        height: 75,
        top: 65
      }, 500, 'swing');
      $('.learn-nav.crocodile img').remove('crocodiles!');
    });
    $('li.learn-nav.lizard img').mouseover(function(){
      $('li.learn-nav.lizard img').animate({
        width: 60,
        height: 60,
        top: 300
      }, 500, 'swing');
      // $('.learn-nav.lizard img').html('lizards');
    });
    $('li.learn-nav.lizard img').mouseout(function(){
      $('li.learn-nav.lizard img').animate({
        width: 50,
        height: 50,
        top: 65
      }, 500, 'swing');
    });
  }
};

module.exports = app;
