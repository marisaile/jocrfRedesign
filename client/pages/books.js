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
  save: function() {
    var data = this.get('books'); // returns empty array first time around
    lscache.set('books', data);
  },
  fetch: function() {
    var data = lscache.get('books');
    data = data || [];
    this.set('books', data);
  }
});
var bookModel = new BookModel();

// Controller
var BookController = Backbone.View.extend ({
  el: '.books-container',
  model: bookModel,
  events: {
    'click .btn-add': 'addBook'
  },
  initialize: function(){
    this.model.fetch();
  },
  render: function(){
    this.$el.find('.book-list-container').html(bookListView.$el);
  },
  addBook: function(){

  }
});


// Views

var BookListView = Backbone.View.extend ({
  tagName: 'div',
  events: {
  	'click .btn-add': 'addToList'
  },
  template: 
  initialize: function(){

  },
  render: function(){

  }
});


var NewBookView = Backbone.Model.extend ({
  tagName: 'div',
  events: {},
  template: 
  initialize: function(){
    this.render();
  },
  render: function(){

  },
  submitForm: function(){
    
  }
});





module.exports = accountControllerView;


