import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import Handlebars from 'handlebars';
import BookItemView from 'pages/books/bookItemView';
import bookList from 'templates/books/bookList.html';

var BookListView = Backbone.View.extend({
  className: 'books-list',
  events: { 
    'click .btn-add-book': 'addNewBook',
    'click .btn-rate-book': 'addRating'   
    // 'click .btn-sort-title': 'sortListBy',
    // 'click .btn-sort-author': 'sortListBy',
    // 'click .btn-sort-friend': 'sortListBy',
    // 'click .btn-sort-genre': 'sortListBy'
  },
  template: Handlebars.compile(bookList),
  initialize: function(options){
    this.data = options.books;   
    this.controller = options.controller;
    this.id = options.id;
    this.render();
  },
  render: function(){
    this.$el.html(this.template({}));
    var books = this.data;
    var $ul = this.$el.find('ul');
    _.each(books, function(book){
      var view = new BookItemView(book);
      $ul.append(view.$el);
    });
  },
  addNewBook: function(){
    this.controller.renderNew();
  }
  // addRating: function(id){
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
