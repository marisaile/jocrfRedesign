import Backbone from 'backbone';
import Handlebars from 'handlebars';
import bookList from 'templates/books/bookList.html';
import addBookView from 'pages/books/addBookView';

var BookListView = Backbone.View.extend({
  el: '.books-main',
  events: { 
    'click .btn-add-book': 'addNewBook'   
    // 'click .btn-sort-title': 'sortListBy',
    // 'click .btn-sort-author': 'sortListBy',
    // 'click .btn-sort-friend': 'sortListBy',
    // 'click .btn-sort-genre': 'sortListBy'
  },
  template: Handlebars.compile(bookList),
  initialize: function(books){
    this.data = books;
    this.render();
  },
  render: function(){   
    this.$el.find('.books-view-container').html(this.template(this.data));
  },
  addNewBook: function(){
    this.$el.find('.books-view-container').html(addBookView.$el);
  }
  // removeFromList: function(){
  //   bookController.removeFromList(this.data.id);
  // }
  // sortListBy: function(){
  //   // sort list by title, author, genre, or recommender
  // }
});

var bookListView = new BookListView();

module.exports = bookListView;
