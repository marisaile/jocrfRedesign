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

var app = {
  init: function(){
    app.render();
  },
  render: function(){
    $(document).ready(function() {
      $('.main-header').slideUp(1000);
      $('.school-header').slideDown(1000);
    });
    $('.eng').click(function(){
      $('.response-container').html(english);
    });
    $('.his').click(function(){
      $('.response-container').html(history);
    });
    $('.math').click(function(){
      $('.response-container').html(math);
    });
    $('.music').click(function(){
      $('.response-container').html(noBooks);
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
    $('.vis').click(function(){
      $('.response-container').html(noBooks);
    });
    $('.main-school').change(function(){
      $('.school-books-list').fadeIn(5000);
    });
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

