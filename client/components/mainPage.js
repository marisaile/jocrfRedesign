import $ from 'jquery';
import mainHeader from 'components/mainHeader';
import mainMain from 'templates/mainMain.html'

var app = {
  init: function() {
    app.render();
    $('.main-main').append(mainMain);
  },
  render: function() {
    mainHeader.init();
  }
};

module.exports = app;
