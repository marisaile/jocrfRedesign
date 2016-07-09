
import Backbone from 'backbone';
import bookModel from 'pages/books/booksModel';
import BookItemView from 'pages/books/bookItemView';
import BookListView from 'pages/books/booksListView';
import AddBookView from 'pages/books/addBookView';

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
    var view = new BookListView({
      controller: this,
      books: this.model.get('books')
    });
    this.$el.html(view.$el);
  },
  addBook: function(newBook){
    this.model.addBook(newBook); 
    this.render();
  },
  removeBook: function(id){
    this.model.removeBook(id);
    this.render();
  }

  // addRating: function(id){ 
  //   var view = new BookReviewView({
  //     controller: this,
  //     id: id
  //   });
  //   this.$el.html(view.$el);
  // },
  // saveRating: function(rating, id){
  //   debugger;
  //   this.model.saveRating(rating, id);
  //   this.render();
  // }
});

var bookController = new BookController();

module.exports = bookController;
