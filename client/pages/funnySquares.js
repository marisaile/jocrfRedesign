
import $ from 'jquery';
import _ from 'underscore';
import Handlebars from 'handlebars';
import rawTemplate from 'templates/funnySquare.html';
import header from 'templates/workPage.html';

var template;

var app = {
  init: function(){
    template = Handlebars.compile(rawTemplate);
    app.render();
  },

  render: function() {
    $('.sections-work').html(header);
    // display 6 squares  
    var numberOfSquares = 6;
    var renderedHtml = '';
    _.times(numberOfSquares, function(index){
      renderedHtml += template({ id: index + 1 });
    });
    $('main').append(renderedHtml);
  }
};
module.exports = app;
