import $ from 'jquery';
import ddrsAbout from 'templates/ddrsAbout.html';

var app = {
  init: function(){
    app.render();
  },
  render: function(){
    $('.dalquest-about').html(ddrsAbout);
    app.bindClickEvents();
  },
  scrollAbout: function(){
    $('#about').click(function(){
      $('html, body').animate({
        scrollTop: $('.dalquest-about').offset().top
      }, 500);
    });
  },
  activeLink: function(){
    $('a').on('click', function(){
      var currentSection = $('a').attr('id');
      if (currentSection === $('section').attr('name')){
        $('a').addClass('active');
      }
    });
  },
  bindClickEvents: function(){
    app.scrollAbout();
    app.activeLink();
  }
};

module.exports = app;
