var $ = require('jquery');

window.jQuery = window.$ = $;
require('bootstrap');

import template from 'templates/promptContainer.html';
import Handlebars from 'handlebars';
import _ from 'underscore';

var compiledTemplate;
var backgroundColors = ['#0ac2d2', '#030027', '#EE4B6A', '#ff9505', '#a81e9c', '#0B3954', '#29002F', '#2bc016', '#ff4365', '#31cb00', '#3bceac', '#c04cfd', '#A833B9', '#f42b03', '#720eff', '#246EB9'];
var prompts = [];
var promptHtml = [];


var app = {
  init: function(){
    app.compileTemplate();
    app.render();
  },
  render: function(){
    app.fetchPrompts();
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
        app.displayPrompt();
      }  
    }); 
  },
  displayPrompt: function(){ 
    $(document).on('click', '.writing-prompts-button', function(e){
      e.preventDefault();
      promptHtml = _.map(prompts, function(prompt){
        return compiledTemplate(prompt);
      });
      app.shuffleArray(promptHtml);
      app.shuffleArray(backgroundColors);
      var randomPrompt = promptHtml.slice(0, 1);
      $('.writing-prompt-container').html(randomPrompt);
      var randomColor = backgroundColors.slice(0, 1);
      $('.writing-prompts').css({
        'background-color': randomColor
      });  
    });
  }, 
  shuffleArray: function(array){
    var m = array.length;
    var t;
    var i;
    while (m > 0) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
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
