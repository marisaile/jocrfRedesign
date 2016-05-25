
import $ from 'jQuery';
import mainNavbar from 'templates/mainNavbar.html';

var app = {
  init: function() {
    app.render();
  },
  render: function() {
    $('.main-header').append(mainNavbar);
  }
};

module.exports = app;
