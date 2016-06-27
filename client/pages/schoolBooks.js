import $ from 'jquery';
import science from 'templates/scienceBooks.html';
import history from 'templates/historyBooks.html';
import english from 'templates/englishLit.html';
import math from 'templates/math.html';
import polisci from 'templates/polisciBooks.html';
import psych from 'templates/psychBooks.html';

var app = {
  init: function(){
    app.render();
  },
  render: function(){
    $('.subject-list').on('change', function(){
      var selection = $('.select-picker').find('option:selected').val();
        if (selection === 'Science') {
          $('.response-container').html(science);
        } else if (selection === 'History') {
          $('.response-container').html(history);
        } else if (selection === 'English Literature') {
          $('.response-container').html(english);
        } else if (selection === 'Math/Statistics') {
          $('.response-container').html(math);
        } else if (selection === 'Political Science/Current Affairs') {
          $('.response-container').html(polisci);
        } else if (selection === 'Psychology') {
          $('.response-container').html(psych);
        }
    });
  }
};

module.exports = app;