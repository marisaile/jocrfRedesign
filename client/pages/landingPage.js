import $ from 'jquery';
import landingPage from 'templates/landingPage.html';

var app = {
  init: function(){
    app.render();
  },
  render: function(){
    $('.landing-page').html(landingPage);
  }
};

module.exports = app;

