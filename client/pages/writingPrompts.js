var $ = require('jquery');

window.jQuery = window.$ = $;
require('bootstrap');

import template from 'templates/promptContainer.html';
import Handlebars from 'handlebars';
import _ from 'underscore';

var compiledTemplate;
var backgroundColors = ['#0ac2d2', '#ff9505', '#a81e9c', '#2bc016', '#ff4365', '#31cb00', '#3bceac', '#c04cfd', '#f42b03', '#720eff'];
var prompts = [];
var promptHtml;

var app = {
  init: function(){
    app.compileTemplate();
    app.render();
  },
  render: function(){
    app.fetchPrompts()
    app.bindClickEvents();
  },
  compileTemplate: function(){
    compiledTemplate = Handlebars.compile(template);
  },
  fetchPrompts: function(){
    $.ajax({
      url: '/api/writingPrompts',
      method: 'GET',
      complete: function(response){
        var dataString = response.responseText;
        var data = JSON.parse(dataString); 
        prompts = data;
      }  
    }); 
  },
  displayPrompt: function(){
    $('.writing-prompts-button').click(function(){  
      promptHtml = _.map(prompts, function(prompt){
        return compiledTemplate(prompt);
      });
      var randomPrompt = promptHtml[Math.floor(Math.random() * promptHtml.length)];
      $('.writing-prompt-container').html(randomPrompt);
      var randomColor = backgroundColors[Math.floor(Math.random() * backgroundColors.length)];
      $('.writing-prompts').css({
        'background-color': randomColor
      });  
    });   
  }, 
  bindClickEvents: function(){
    app.displayPrompt();
  }
};

module.exports = app;

  // app.fetchBooks();
  // 
    // saveBookData: function(){
  //   $.ajax({
  //     url: 'api/books',
  //     method: 'POST',
  //     complete: function(response){
  //       var dataString = response.responseText;
  //       var data = JSON.parse(dataString);
  //       books = data;
  //     }
  //   });
  // },
  // subscribe: function(){
  //   $.ajax({
  //     url: 'api/subscribe',
  //     method: 'POST',
  //     complete: function(response){
  //       var dataString = response.responseText;
  //       var data = JSON.parse(dataString);
  //       subscriber = data;
  //     }
  //   });
  // },
    // pickSubject: function(){
  //   $('a').on('click', function(event){
  //     var currentSubject = event.target.id;
  //     var filteredBooks = _.filter(books, function(book){
  //       return (book.subject === currentSubject);
  //     });
  //     var filteredBooksHtml = filteredBooks.map(function(book) {
  //       return compiledTemplate(book);
  //     });
  //     $('.school-main').html(filteredBooksHtml);
  //     app.render();
  //   });
  // },
  // deployIsotope: function(){
    
  // },
  // addBook: function(){
  //   $('.btn-suggest').on('click', function(){
  //     $('.modal-body').html(suggest);
  //     $('#modal-suggest').modal();
  //     app.submitBook();
  //   });
  // },
  // displayBooks: function() { 
  //   var booksHtml = books.map(function(book){
  //     return compiledTemplate(book);
  //   });
  //   app.render();
  // },
  // submitBook: function(){
  //   $('.btn-submit-book').on('click', function(e){
  //     e.preventDefault();
  //     var subjectText = $('.subject input').val();
  //     var titleText = $('.title input').val();
  //     var authorText = $('.author input').val();
  //     var nameText = $('.name input').val();
  //     var emailText = $('.email input').val();
  //     if (
  //       subjectText.length > 2 
  //       && titleText.length > 0 
  //       && authorText.length > 2 
  //       && nameText.length > 0
  //       && emailText.indexOf('@') !== -1
  //       && emailText.indexOf('.') !== -1
  //     ) {
  //       $('.modal-body').html(thank);
  //     } else {
  //       $('.modal-body').prepend('<p class="error-message">Please fill in all fields.</p>');
  //     }     
  //   });
  //   // app.saveBookData();
  // },
