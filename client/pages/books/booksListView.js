import $ from 'jquery';
import Backbone from 'backbone';
import Handlebars from 'handlebars';
import bookList from 'templates/books/bookList.html';

var BookListView = Backbone.View.extend({
  className: 'books-list',
  events: { 
    'click .btn-add-book': 'addNewBook',
    'click .close-book': 'removeBook'
    // 'click .btn-primary': 'addRating'   
    // 'click .btn-sort-title': 'sortListBy',
    // 'click .btn-sort-author': 'sortListBy',
    // 'click .btn-sort-friend': 'sortListBy',
    // 'click .btn-sort-genre': 'sortListBy'
  },
  template: Handlebars.compile(bookList),
  initialize: function(options){
    this.data = options.books;   
    this.controller = options.controller;
    this.render();
  },
  render: function(){
    this.$el.html(this.template({}));
    _.each(books, function(book){
      // make item views
    });
  },
  addNewBook: function(){
    this.controller.renderNew();
  },
  removeBook: function(){
    this.controller.removeBook(this.data.id);
  },
  // addRating: function(){
  //   this.controller.addRating(this.data.id);
  // }
  // showSynopsis: function(){
  //   
  // }
  // sortListBy: function(){
  //   // sort list by title, author, genre, or recommender
  // }
});

module.exports = BookListView;
