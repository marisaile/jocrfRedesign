import $ from 'jquery';
import main from 'templates/mainMain.html';

var app = {
  init: function() {
    app.render();
  },
  render: function() {
    $('.main-main').html(main);
  }
};

module.exports = app;
