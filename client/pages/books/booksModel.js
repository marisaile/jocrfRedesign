import $ from 'jquery';
import _ from 'underscore';
import Backbone from 'backbone';
import lscache from 'lscache';

var BookModel = Backbone.Model.extend({
  defaults: {
    books: []
  },
  bookSchema: {
    id: 0,
    title: '',
    author: '',
    friend: '',
    genre: '',
    rating: ''
  },
  fetch: function(){
    var data = lscache.get('books');
    data = this.applySchema(data);
    this.set('books', data);
  },
  save: function(){
    var data = this.get('books');
    data = this.applySchema(data);
    lscache.set('books', data);
  },
  applySchema: function(books) { 
    var data = books;
    var schema = this.bookSchema;
    // shorthand 'if':
    data = (_.isArray(books)) ? data : [];
    data = data.map(function(book, index) {
      book.id = index;
      return _.defaults(book, schema);  
    });
    return data;    
  },
  addBook: function(newBook){
    var books = this.get('books');
    books.push(newBook);
    this.set('books', books);
    this.save();
  },
  removeBook: function(id){
    var books = this.get('books');
    books.splice(id, 1);
    this.save();
  }
  // addRating: function(id){
  //   var books = this.get('books');
  //   this.set('books', books);
  //   this.save();
  // },
  // saveRating: function(rating, id){
  //   var books = this.get('books');
  //   books.push(id, rating);
  //   this.set('books', books);
  //   this.save();
  // }
 
  // addFriend: function(){
    
  // }
});
var bookModel = new BookModel();

module.exports = bookModel;
