
import Backbone from 'backbone';
import bookModel from 'pages/books/booksModel';
import AddBookView from 'pages/books/addBookView';
import BookListView from 'pages/books/booksListView';

var BookController = Backbone.View.extend({
  el: '.books-main',
  model: bookModel,
  events: {},
  initialize: function(){
    this.model.fetch();
  },
  renderNew: function(){ 
    var view = new AddBookView({
      controller: this
    });
    this.$el.html(view.$el);
  },
  render: function() {
    // for each object in the books array, append the contents to a row in the table
    var view = new BookListView({
      controller: this,
      books: this.model.get('books')
    });
    this.$el.html(view.$el);
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
