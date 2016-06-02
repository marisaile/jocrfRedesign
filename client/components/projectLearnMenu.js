import $ from 'jQuery';
import LearnMenu from 'templates/projectLearnMenu.html';

var app = {
  init: function() {
    $('.project-header').append(LearnMenu);
    app.render();
  },
  render: function() {
    $('img.crocodile').on('mouseover', function(){
      $('img.crocodile').animate({
        width: 75,
        height: 75
      }, 1000, 'swing');
    });
  }
};

module.exports = app;
