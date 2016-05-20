import $ from 'jQuery';
import projectNavMenu from 'templates/projectNavMenu.html';

var app = {
  init: function() {
    app.render();
  },
  render: function() {
    $('.project-header').append(projectNavMenu);
  }
};

module.exports = app;
