
import $ from 'jquery';
import _ from 'underscore';
import Handlebars from 'handlebars';
import rawTemplate from 'templates/funnySquare.html';

// var squareColors = ['blue', 'red', 'orange', 'green', 'purple', 'black'];
var template;

var app = {
  init: function(){
    template = Handlebars.compile(rawTemplate);
    app.render();
  },

  render: function() { 
    var numberOfSquares = 6;
    var renderedHtml = '';
    _.times(numberOfSquares, function(index){
      renderedHtml += template({ id: index + 1 });
      // $('.square').css({
      //   'background-color': squareColors[index]
      // });
    });
    $('main').append(renderedHtml);
  }
};
module.exports = app;
