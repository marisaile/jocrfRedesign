
import Backbone from 'backbone';
import bookModel from 'pages/books/booksModel';
import addBookView from 'pages/books/addBookView';
import bookListView from 'pages/books/booksListView';

var BookController = Backbone.View.extend({
  el: '.books-main',
  model: bookModel,
  events: {
    'click .btn-add': 'addBook'
  },
  initialize: function(){
    this.model.fetch();
    this.model.on('change', this.render, this);
  },
  render: function(){ 
    var books = this.model.get('books');
    this.$el.find('.books-view-container').html(bookListView);
    books.forEach(this.$el.find('.template-row').append(book));
  },
  // removeFromList: function(id){
  //   this.model.RemoveFromList(id);
  //   this.render();
  // },
  addBook: function(newBook){
    this.model.addBook(newBook);
    this.render();
  }
});
var bookController = new BookController();

module.exports = bookController;
