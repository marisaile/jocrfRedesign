var $ = require('jquery');

window.jQuery = window.$ = $;


// import Handlebars from 'handlebars';
import _ from 'underscore';
import template from 'templates/school/schoolBookContainer.html';
import header from 'templates/school/bookPageHeader.html';
// import bookSuggestion from 'templates/school/suggestBook.html';
// import Conclave from 'components/schoolbooks/carousel';

// var compiledTemplate = Handlebars.compile(template);
// var books = [];

var app = {
  init: function(){
    app.render();
  },
  render: function(){
    $('.school-header').html(header);
    // Conclave.init();
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
  //     }  
  //   });    
  // },
  // displayBooks: function() { 
  //   // var currentSubject = event.target.id;
  //   // var filteredBooks = _.filter(books, function(book){
  //   //   return (book.subject === currentSubject);
  //   // });
  // //   var booksHtml = filteredBooks.map(function(book){
  // //     return compiledTemplate(book);
  // //   });
  // //   $('.school-header').html(header);    
  // // }
};

module.exports = app;


// function toggle_visibility(id) {
//        var e = document.getElementById(id);
//        if(e.style.display == 'block')
//           e.style.display = 'none';
//        else
//           e.style.display = 'block';
//     }
