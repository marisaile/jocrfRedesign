import $ from 'jquery';
import Handlebars from 'handlebars';
import template from 'templates/word.html';

var WordAssociationList = require('components/wordAssociationWords');
var wordTemplate = Handlebars.compile(template);
var currentIndex = 0;
var significantResponse = 0;

var app = {
  init: function(){
    app.render();
  },
  render: function(){    
    app.bindEvents();
  },
  bindEvents: function(){
    app.noResponse();
    app.countSignificantResponses(); 
  },
  countSignificantResponses: function(){
    $('.response').on('click', function(){
      significantResponse++
      $('.sig-response').html('Significant Responses: ' + significantResponse);
    });
  },
  noResponse: function(){
    $('.next-word').on('click', function(){
      $('.word-container').html(wordTemplate(WordAssociationList[currentIndex]));
       currentIndex++;
    });
  }
};
  
module.exports = app;