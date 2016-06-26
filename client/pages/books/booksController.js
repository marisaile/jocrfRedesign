
import Backbone from 'backbone';
import bookModel from 'pages/books/booksModel';
import addBookView from 'pages/books/addBookView';
import bookListView from 'pages/books/booksListView';
import NewBookView from 'pages/books/newBook';

var BookController = Backbone.View.extend({
  el: '.books-main',
  model: bookModel,
  events: {
    'click .btn-add-book': 'addNewBook',
    'click .btn-add': 'addBook'
  },
  initialize: function(){
    this.model.fetch();
    this.model.on('change', this.render, this);
    this.render();
  },
  render: function(){ 
    var books = this.model.get('books');
    var $ul = this.$el.find('ul');
    // $ul.html('');
    books.map(function(book){
      var newBookView = new NewBookView(book); 
      $ul.append(newBookView.$el);   
    });
    bookListView.render();
  },
  addNewBook: function(){
    this.$el.find('.books-view-container').html(addBookView);
  },
  // removeFromList: function(id){
  //   this.model.RemoveFromList(id);
  //   this.render();
  // },
  addBook: function(newBook){
    var newBookView = new NewBookView();
    this.model.addBook(newBook);
    this.render();
  }
});
var bookController = new BookController();
module.exports = bookController;
