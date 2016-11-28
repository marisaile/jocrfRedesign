import $ from 'jquery';

import workSection from 'templates/workPage.html';
import resume from 'templates/resume.html';

var app = {
  init: function(){  
    app.render();
  },
  render: function(){
    app.scrollBio();
    app.scrollWork();
    app.scrollResume();
  },
  scrollBio: function(){
    $('.bio').click(function(){
      $('html, body').animate({
          scrollTop: $('.bio-about').offset().top
        }, 600);
    });
  },
  scrollWork: function(){
    $('.projects').click(function(){
      $('body').html(workSection);
    });
  }, 
  scrollResume: function(){
    $('.resume').click(function(){
      $('body').html(resume);
    });
  }
};

module.exports = app;
