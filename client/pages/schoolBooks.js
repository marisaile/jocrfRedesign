var $ = require('jquery');

window.jQuery = window.$ = $;
require('bootstrap');
import Handlebars from 'handlebars';
import _ from 'underscore';
import landing from 'templates/school/schoolBooksLanding.html';
import template from 'templates/school/schoolBookContainer.html';
import header from 'templates/school/bookPageHeader.html';

var compiledTemplate = Handlebars.compile(template);
var books = [];

var app = {
  init: function(){
    app.render();
  },
  render: function(){
    $('.school-main').html(landing);
    app.fetchBooks();
  },
  fetchBooks: function(){
    $.ajax({
      url: '/api/books',
      method: 'GET',
      complete: function(response){
        var dataString = response.responseText;
        var data = JSON.parse(dataString);
        books = data;  
        app.displayBooks();
      }  
    });    
  },
  displayBooks: function() { 
    $('a').click(function(event){
      var currentSubject = event.target.id;
      var filteredBooks = _.filter(books, function(book){
        return (book.subject === currentSubject);
      });
      var booksHtml = filteredBooks.map(function(book){
        return compiledTemplate(book);
      });
      $('.school-header').html(header);
      app.render();
      $('.school-main').html(booksHtml);
    });  
  // },
  // schoolHeader: function(){
  //   $('a').click(function(event) {
  //     app.render();
  //     var active = event.target.id;
  //     active.addClass('active');
  //   });
  }
};

module.exports = app;
