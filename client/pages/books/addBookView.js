
import Backbone from 'backbone';
import Handlebars from 'handlebars';
import newBookTemplate from 'templates/books/newBookForm.html';

var AddBookView = Backbone.View.extend({
  className: '.books-add',
  events: {
    'click .btn-add': 'addBook'
  }, 
  template: Handlebars.compile(newBookTemplate),
  initialize: function(options){
    this.controller = options.controller;
    this.render();
  },
  render: function(){
    this.$el.html(this.template({}));
  },
  addBook: function(){
    var $title = this.$el.find('.title').val();
    var $author = this.$el.find('.author').val();
    var $friend = this.$el.find('.friend').val();
    var $genre = this.$el.find('.genre').val();
    var $rating = this.$el.find('.rating').val();
    var newBook = [$title, $author, $friend, $genre, $rating];
    this.controller.addBook(newBook);
  }
});

module.exports = AddBookView;
