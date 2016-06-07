import $ from 'jQuery';
import projectNavMenu from 'templates/projectNavMenu.html';

var app = {
  init: function() {
    app.render();
  },
  render: function() {
    $('.project-header').append(projectNavMenu);
    $('.learn-nav .crocodile').mouseover(function(){
      $('img.crocodile').animate({
        height: 100,
        width: 100,
        top: 80
      }, 500, 'swing');
    });
    $('.learn-nav .crocodile').mouseout(function(){
      $('img.crocodile').animate({
        height: 50,
        width: 50,
        top: 65
      }, 500, 'swing');
    });
  }
};

module.exports = app;
