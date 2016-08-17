var $ = require('jquery');

// legacy loading for bootstrap
window.jQuery = window.$ = $;
require('bootstrap');
import science from 'templates/scienceBooks.html';
import history from 'templates/historyBooks.html';
import english from 'templates/englishLit.html';
import math from 'templates/math.html';
import polisci from 'templates/polisciBooks.html';
import psych from 'templates/psychBooks.html';
import noBooks from 'templates/noBookx.html';
import thankYou from 'templates/thankYou.html';
import landing from 'templates/schoolBooksLanding.html';

var app = {
  init: function(){
    $('.response-container').html(landing);
    app.render();
  },
  render: function(){
    $('.eng').click(function(){
      $('.response-container').html(english);
    });
    $('.his').click(function(){
      $('.response-container').html(history);
    });
    $('.math').click(function(){
      $('.response-container').html(math);
    });
    $('.pol').click(function(){
      $('.response-container').html(polisci);
    });
    $('.psy').click(function(){
      $('.response-container').html(psych);
    });
    $('.sci').click(function(){
      $('.response-container').html(science);
    });
    // $('.books-back').click(function(){
    //   $('.response-container').html(landing);
    // });
  }

  // },
  // showBooks: function(){
    

      
  // }
  // navAnimate: function(){

  //   $('.main-header').mouseenter(function(){
  //     $('.main-header').slideDown(1000);
  //   });
};

module.exports = app;

