var $ = require('jquery');

window.jQuery = window.$ = $;
require('bootstrap');
import Handlebars from 'handlebars';
import _ from 'underscore';
import landing from 'templates/school/schoolBooksLanding.html';
import template from 'templates/school/schoolBookContainer.html';

var compiledTemplate = Handlebars.compile(template);
var books = [];

var app = {
  init: function(){
    app.render();
  },
  render: function(){
    $('.school-main').html(landing);
    app.selectSubject();
  },
  selectSubject: function(){
    $('a.option').click(function(){
      app.fetchBooks();
    });
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
    // var currentSubject = 'english';
    // var filteredBooks = books.filter(function(book){
    //   return (book.subject === currentSubject);
    // });
    var booksHtml = books.map(function(book){
      return compiledTemplate(book);
    });
    $('.school-main').html(booksHtml);
  }
};

module.exports = app;
