
import Backbone from 'backbone';
import Handlebars from 'handlebars';
import newBookTemplate from 'templates/books/newBook.html';

var NewBookView = Backbone.View.extend({
  tagName: 'li',
  className: 'new-book',
  events: {
    'click .btn-add': 'addBook'
  },
  template: Handlebars.compile(newBookTemplate),
  initialize: function(book, controller){
    this.controller = controller; 
    this.data = book;
    this.render();
  },
  render: function(){
    this.$el.html(this.template(this.data));
  },
  addBook: function(){
    var newTitle = this.$el.find('#new-title').val();
    var newAuthor = this.$el.find('#new-author').val();
    var newRecommender = this.$el.find('#new-recommender').val();
    var newGenre = this.$el.find('#new-genre').val();
    var newBook = {
      id: 'index',
      title: newTitle,
      friend: newAuthor,
      recommender: newRecommender,
      genre: newGenre
    };
    this.controller.addBook(newBook); 
  }
});

module.exports = NewBookView;
