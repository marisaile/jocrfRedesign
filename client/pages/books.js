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
});
var bookModel = new BookModel();

// Controller
var BookController = Backbone.View.extend ({
  tagName: tr,
  model: bookModel,
  events: {
    'click .btn-add': 'addBook'
  },
  initialize: function(){
    this.model.fetch();
  },
  render: function(){
    var books = this.model.get('books');
    var $tr = this.$el.find('tr');
    $tr.html('');
    books.map(function(book){
      var view = new BookListView(book);
      $tr.append(view)
    })
  },
  addBook: function(){

  }
});


// Views

var BookListView = Backbone.View.extend ({
  el:  className: ''
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

  },
  render: function(){
    this.$el.html(this.template(this.data));
  }
  addNewBook: function(){
    // switch to new book view
  },
  removeFromList: function(){
    // remove book from list
  },
  sortListBy: function(){
    // sort list by title, author, genre, or recommender
  }
});


var NewBookView = Backbone.Model.extend ({
  el: ,
  events: {
    'click .btn-add'; 'addBook';
  }, 
  template: Handlebars.compile(newBookTemplate);
  initialize: function(){
    this.render();
  },
  render: function(){
    this.$el.html(this.template());
  },
  addBook: function(){
    // add book to list and switch to list view
  }
});

module.exports = BookListView;






