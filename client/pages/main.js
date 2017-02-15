import $ from 'jquery';
import landing from 'templates/landing.html';
import login from 'templates/clientLogin.html';

var app = {
  init: function(){
    app.render();
  }, 
  render: function(){
    $('main').html(landing);
    $('.btn-signin').click(function(e){
      e.preventDefault();
      $('main').html(login);
    });
  }
};

module.exports = app;
