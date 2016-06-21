var $ = require('jquery');

// legacy loading for bootstrap
window.jQuery = window.$ = $;
require('bootstrap');

import _ from 'underscore';
import Backbone from 'backbone';
import Handlebars from 'handlebars';
import lscache from 'lscache';
import newBookTemplate from 'templates/newBookForm.html';
import bookListTemplate from 'templates/bookList.html';
import booksSignin from 'templates/booksSignin.html';

// Model 
var BookModel = Backbone.Model.expand ({
  defaults: {
    books: []
  },
  bookSchema: {
    id: 0,
    title: '',
    author: '',
    recommender: '',
    genre: '',
  }
  fetch: function() {
    var data = lscache.get('books');
    data = this.applySchema(data);
    this.set('books', data);
  }
  save: function() {
    var data = this.get('books'); 
    var data = this.applySchema(data);
    lscache.set('books', data);
  },
  applySchema: function(todos) { 
    var data = books;
    var schema = this.bookSchema;
    // shorthand 'if':
    data = (_.isArray(books)) ? data : [];
    data = data.map(function(book, index) {
      book.id = index;
      return _.defaults(book, schema);
    });
    return data;
  },
  removeFromList: function(){

  },
  addBook: function(){

  },
  addFriend: function(){
    
  }
});
var bookModel = new BookModel();

// Controller
var BookController = Backbone.View.extend ({
  el: '.books-view-container',
  model: bookModel,
  events: {
    'click .btn-add': 'addBook'
  },
  initialize: function(){
    this.model.fetch();
  },
  render: function(){
    var books = this.model.get('books');
    var $el = this.$el.find('tr');
    $tr.html('');
    var bookListHtml = books.map(function(book){
      var view = new BookListView(book);
      return view;
    });
    $tr.append(bookListHtml.join(''));
  },
  addNewBook: function(){
    var newBookView = new NewBookView();
    this.$el.find('books-view-container').html(newBookView.$el);
  },
  removeFromList: function(){
    // get id of closed item 
    // splice item
    // send to model
  },
  sortListBy: function(){

  },
  addBook: function(){
    // send book data to model
    // switch to list view with new book data added to a new row
  }
});

// Views
var BookListView = Backbone.View.extend ({
  el: 'books-view-container',
  events: {
  	'click .btn-add-book': 'addNewBook',
    'click .btn-read': 'removeFromList',
    'click .btn-sort-title': 'sortListBy',
    'click .btn-sort-author': 'sortListBy',
    'click .btn-sort-recommender': 'sortListBy',
    'click .btn-sort-genre': 'sortListBy'
  },
  template: Handlebars.compile(bookListTemplate);
  initialize: function(){
    this.render();
  },
  render: function(){
    var renderedTemplate = this.template({})
    this.$el.html(renderedTemplate);
  }
  removeFromList: function(){
    BookController.removeItem(this.data.id);
    // get id of item to be removed
    // send id to controller
  },
  sortListBy: function(){
    // sort list by title, author, genre, or recommender
  }
});


var NewBookView = Backbone.Model.extend({
  el: '.books-view-container',
  events: {
    'click .btn-add': 'addBook'
  }, 
  template: Handlebars.compile(newBookTemplate),
  initialize: function(){
    this.render();
  },
  render: function(){
    var renderedTemplate = this.template({});
    this.$el.html(renderedTemplate);
  },
  addBook: function(){
    
    // get book values out of form
    // send values to the controller
    // add book to list and switch to list view
  }
});

// var FriendsSigninView = Backbone.model.extend({
//   el: '.books-view-container',
//   events: {
//     'click .btn-friends-signin': 'addFriend'
//   },
//   template: Handlebars.compile(booksSignin),
//   initialize: function(){
//     this.render();
//   },
//   render: function(){
//     var renderedTemplate = this.template({});
//     this.$el.html(renderedTemplate);
//   },
//   addFriend: function(){
//     // add friend 
//   }
// });





