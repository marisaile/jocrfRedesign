import $ from 'jquery';
import Backbone from 'backbone';
import Handlebars from 'handlebars';
import bookItem from 'templates/books/bookItem.html';

var BookItemView = Backbone.View.extend({
  tagName: 'li',
  className: 'list-group-item row',
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