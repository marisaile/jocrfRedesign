var $ = require('jquery');

window.$ = $;
require('jquery.easing');

import landingPage from 'templates/landingPage.html';
import workSection from 'templates/workPage.html';

var app = {
  init: function(){
    $('.portfolio-main').html(landingPage);
    app.render();
  },
  render: function(){   
    app.bindClickEvents();
  },  
  scrollBio: function(){
    $('.bio').click(function(){
      $('html, body').animate({
          scrollTop: $('.portfolio-bio').offset().top
        }, 1000, 'easeInOutExpo' );
    });
  },
  scrollWork: function(){
    $('.projects').click(function(){
      $('body').html(workSection);
    });
  }, 
  bindClickEvents: function(){
    app.scrollBio();
    app.scrollWork();
  }
};

module.exports = app;
