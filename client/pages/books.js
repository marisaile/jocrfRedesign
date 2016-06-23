var $ = require('jquery');

// legacy loading for bootstrap
window.jQuery = window.$ = $;
require('bootstrap');

import _ from 'underscore';
import Backbone from 'backbone';
import Handlebars from 'handlebars';
import lscache from 'lscache';
import newBookTemplate from 'templates/books/newBookForm.html';
import bookListTemplate from 'templates/books/bookList.html';
// import booksSignin from 'templates/books/booksSignin.html';

// Model 
var BookModel = Backbone.Model.extend({
  defaults: {
    books: []
  },
  bookSchema: {
    id: 0,
    title: '',
    author: '',
    recommender: '',
    genre: ''
  },
  fetch: function() {
    var data = lscache.get('books');
    data = this.applySchema(data);
    this.set('books', data);
  },
  save: function() {
    var data = this.get('books'); 
    this.applySchema(data);
    lscache.set('books', data);
  },
  applySchema: function(books) { 
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
    var books = this.get('books');
    books.splice(id, 1);
    this.save();
  },
  addBook: function(newBook){
    var book = {title: newBook};
    var books = this.get('books');
    books.push(book);
    this.set('books', books);
    this.save();
  }
  // addFriend: function(){
    
  // }
});
var bookModel = new BookModel();

// Controller
var BookController = Backbone.View.extend({
  el: '.books-main',
  model: bookModel,
  events: {
    'click .btn-add-book': 'addNewBook'
  },
  initialize: function(){
    this.model.fetch();
  },
  render: function(){ 
    var bookListView = new BookListView();
    this.$el.find('.books-view-container').html(bookListView.$el);
  },
  addNewBook: function(){
    var newBookView = new NewBookView();
    this.$el.find('.books-view-container').html(newBookView.$el);
  },
  removeFromList: function(id){
    this.model.RemoveFromList(id);
    this.render();
  },
  addBook: function(){
    var books = this.model.get('books');
    var $table = this.$el.find('table');
    var bookListHtml = books.map(function(book){
    var view = new BookListView();
      return view;
    });
    $table.append(bookListHtml.join(''));
    this.model.addBook();
    this.render();
  }
});
var bookController = new BookController();

// Views
var BookListView = Backbone.View.extend({
  el: '.books-main',
  model: bookModel,
  events: {
    
    // 'click .btn-read': 'removeFromList',
    // 'click .btn-sort-title': 'sortListBy',
    // 'click .btn-sort-author': 'sortListBy',
    // 'click .btn-sort-recommender': 'sortListBy',
    // 'click .btn-sort-genre': 'sortListBy'
  },
  template: Handlebars.compile(bookListTemplate),
  initialize: function(){
    this.render();
  },
  render: function(){
    var renderedTemplate = this.template({});
    this.$el.html(renderedTemplate);
  },
  addNewBook: function(){
    bookController.addNewBook();
  }
  // removeFromList: function(){
  //   // get id of item to be removed
  //   // send id to controller
  // },
  // sortListBy: function(){
  //   // sort list by title, author, genre, or recommender
  // }
});


var NewBookView = Backbone.View.extend({
  el: '.books-main',
  events: {
    'click .btn-add': 'addBook'
  }, 
  template: Handlebars.compile(newBookTemplate),
  initialize: function(){
    this.render();
  },
  render: function(){
    this.$el.html(this.template({}));
  },
  addBook: function(){// get book values out of form
    var newTitle = this.$el.find('#new-title').val();
    var newAuthor = this.$el.find('#new-author').val();
    var newRecommender = this.$el.find('#new-recommender').val();
    var newGenre = this.$el.find('#new-genre').val();
    var newBook = ['newTitle', 'newAuthor', 'newRecommender', 'newGenre'];
    bookController.addBook(newBook);
    // send values to the controller
    // add book to list and switch to list view
  }
});

module.exports = new BookListView();
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
//});
