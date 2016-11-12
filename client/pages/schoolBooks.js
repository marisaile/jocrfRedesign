var $ = require('jquery');

window.jQuery = window.$ = $;
require('bootstrap');

import Handlebars from 'handlebars';
import _ from 'underscore';
import template from 'templates/school/schoolBookContainer.html';
import header from 'templates/school/bookPageHeader.html';
import suggest from 'templates/school/suggestBook.html';
import thank from 'templates/school/thankYou.html';
import footer from 'templates/school/schoolFooter.html';
// import header from 'templates/school/schoolBooksLanding.html';
// import bookSuggestion from 'templates/school/suggestBook.html';
// import Conclave from 'components/schoolbooks/carousel';

var compiledTemplate = Handlebars.compile(template);
var books = [];

var app = {
  init: function(){
    app.fetchBooks();
    app.render();
  },
  render: function(){
    $('.school-header').html(header);
    $('.school-footer').html(footer);
    app.bindEvents();
    
    // $('.btn-suggestion').click(function(){
    //   $('.thank-you').removeClass('hidden');
    // });
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
    var booksHtml = books.map(function(book){
      return compiledTemplate(book);
    });
    // $('.school-header').html(header);
    $('.gallery').html(booksHtml);            
    app.render();
  },
  pickSubject: function(){
    $('a').on('click', function(event){
      var currentSubject = event.target.id;
      // $('option').html(currentSubject);
      var filteredBooks = _.filter(books, function(book){
        return (book.subject === currentSubject);
      });
      var filteredBooksHtml = filteredBooks.map(function(book) {
        return compiledTemplate(book);
      });
      $('.school-header').html(header);
      $('.gallery').html(filteredBooksHtml);
      app.render();
    });
  },
  addBook: function(){
    $('.btn-suggest').on('click', function(){
      $('.modal-body').html(suggest);
      $('#modal-suggest').modal();
      app.submitBook();
    });
  },
  submitBook: function(){
    $('.btn-submit-book').on('click', function(e){
      e.preventDefault();
      var subjectText = $('.subject input').val();
      var titleText = $('.title input').val();
      var authorText = $('.author input').val();
      var nameText = $('.name input').val();
      var emailText = $('.email input').val();
      if (
        subjectText.length > 2 
        && titleText.length > 0 
        && authorText.length > 2 
        && nameText.length > 0
        && emailText.indexOf("@") !== -1
        && emailText.indexOf(".") !== -1
      ) {
        $('.modal-body').html(thank);
      } else {
        $('.modal-body').prepend('<p class="error-message">Please fill in all fields.</p>');
      }     
    });
    // app.saveBookData();
  },
  saveBookData: function(){
    $.ajax({
      url: 'api/books',
      method: 'POST',
      complete: function(response){
        var dataString = response.responseText;
        var data = JSON.parse(dataString);
        books = data;
      }
    });
  },
  subscribe: function(){
    $.ajax({
      url: 'api/subscribe',
      method: 'POST',
      complete: function(response){
        var dataString = response.responseText;
        var data = JSON.parse(dataString);
        subscriber = data;
      }
    });
  },
  bindEvents: function(){
    app.pickSubject();
    app.addBook(); 
  }
};

module.exports = app;


// function toggle_visibility(id) {
//        var e = document.getElementById(id);
//        if(e.style.display == 'block')
//           e.style.display = 'none';
//        else
//           e.style.display = 'block';
//     }
