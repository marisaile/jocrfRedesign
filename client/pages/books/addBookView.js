
import Backbone from 'backbone';
import Handlebars from 'handlebars';
import newBookTemplate from 'templates/books/newBookForm.html';
import bookListView from 'pages/books/booksListView';

var AddBookView = Backbone.View.extend({
  el: '.books-main',
  events: {}, 
  template: Handlebars.compile(newBookTemplate),
  initialize: function(){
    this.render();
  },
  render: function(){
    this.$el.html(this.template({}));
  }
  // addBook: function(){
     
  //   // send values to the controller
  //   // add book to list and switch to list view
  // }
});
var addBookView = new AddBookView();

module.exports = addBookView;
