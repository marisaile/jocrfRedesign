var $ = require('jquery');

window.jQuery = window.$ = $;
require('bootstrap');

import Handlebars from 'handlebars';
import _ from 'underscore';
import landing from 'templates/school/schoolBooksLanding.html';
// import template from 'templates/school/schoolBookContainer.html';
import header from 'templates/school/bookPageHeader.html';
// import bookSuggestion from 'templates/school/suggestBook.html';


// var compiledTemplate = Handlebars.compile(template);
// var books = [];

var app = {
  init: function(){
    app.render();
  },
  render: function(){
    $('.school-header').html(header);
    // $('.btn-modal').click(function(){
    //   $('#myModal').modal();
    // });
    // $(".test").click(function () {
    //   $("#thedialog").attr('src', $(this).attr("href"));
    //   $("#somediv").dialog({
    //     width: 400,
    //     height: 450,
    //     modal: true,
    //     close: function () {
    //       $("#thedialog").attr('src', "about:blank");
    //     }
    //   });
    //   return false;
    // });
    // app.fetchBooks();
    // $('.btn-suggestion').click(function(){
    //   $('.thank-you').removeClass('hidden');
    // });
  }
  // fetchBooks: function(){
  //   $.ajax({
  //     url: '/api/books',
  //     method: 'GET',
  //     complete: function(response){
  //       var dataString = response.responseText;
  //       var data = JSON.parse(dataString);
  //       books = data;  
  //       app.displayBooks();
  //       app.coverflow();
  //     }  
  //   });    
  // },
  // displayBooks: function() { 
  //   $('a').click(function(event){

      // var currentSubject = event.target.id;
      // var filteredBooks = _.filter(books, function(book){
      //   return (book.subject === currentSubject);
      // });
      // var booksHtml = filteredBooks.map(function(book){
      //   return compiledTemplate(book);
      // });
      // $('.school-header').html(header);
      // app.render();
  //     $('.school-main').html(booksHtml);
  //   });  
  // }
};

module.exports = app;


// function toggle_visibility(id) {
//        var e = document.getElementById(id);
//        if(e.style.display == 'block')
//           e.style.display = 'none';
//        else
//           e.style.display = 'block';
//     }
