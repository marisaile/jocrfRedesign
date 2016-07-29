import $ from 'jquery';
import mainHeader from 'components/mainHeader';
import mainPage from 'templates/mainMain.html';
import mainFooter from 'templates/mainFooter.html';

var app = {
  init: function() {
    mainHeader.init();
    app.render();
  },
  render: function() {
    $('.main-main').append(mainPage);
    $('.main-footer').append(mainFooter);
  }
};

module.exports = app;
