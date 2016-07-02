import $ from 'jquery';
import Backbone from 'backbone';
import Handlebars from 'handlebars';
import bookItem from 'templates/books/bookItem.html';

var BookItemView = Backbone.View.extend({
  className: 'new-book',
  events: {},
  template: Handlebars.compile(bookItem),
  initialize: function(book){
    this.data = book;
    this.render();
  },
  render: function(){
    this.$el.html(this.template(this.data));
  }
}); 

module.exports = BookItemView;