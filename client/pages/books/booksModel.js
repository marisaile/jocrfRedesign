
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
    genre: ''
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
  // fetch: function() {
  //   var that = this;
  //   $.ajax({
  //     url: '/api',
  //     method: 'GET',
  //     complete: function(response){
  //       var dataString = response.responseText;
  //       var data = JSON.parse(dataString);
  //       data = that.applySchema(data);
  //       that.set('books', data);   
  //     }
  //   });
  // },
  // save: function() {
  //   var that = this;
  //   var books = this.get('books');
  //   $.ajax({
  //     url: '/api',
  //     method: 'POST',
  //     data: {books: JSON.stringify(books)},
  //     complete: function(response){
  //       var dataString = response.responseText;
  //       var data = JSON.parse(dataString);
  //       data = that.applySchema(data);
  //       that.set('books', data);   
  //     }
  //   });
  // },
  applySchema: function(books) { 
    var data = books;
    var schema = this.bookSchema;
    // shorthand 'if':
    data = (_.isArray(books)) ? data : [];
    data = data.map(function(book) {
      // book.id = index;
      return _.defaults(book, schema);
    });
    return data;
  },
  // removeFromList: function(id){
  //   var books = this.get('books');
  //   books.splice(id, 1);
  //   this.save();
  // },
  addBook: function(newBook){
    var books = this.get('books');
    books.push(newBook);
    this.set('books', books);
    this.save();
  }
  // addFriend: function(){
    
  // }
});
var bookModel = new BookModel();

module.exports = bookModel;
