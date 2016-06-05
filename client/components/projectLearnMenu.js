import $ from 'jQuery';
import projectNavMenu from 'templates/projectNavMenu.html';

var app = {
  init: function() {
    $('.project-header').append(projectNavMenu);
    app.render();
  },
  render: function() {
    $('.learn-nav .crocodile').hover(function(){
      $('.learn-nav .crocodile').animate({
        height: 100,
        width: 100,
        top: 80
      }, 2000, 'swing');
    });
  }
};

module.exports = app;
