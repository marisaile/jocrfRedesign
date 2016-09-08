import $ from 'jquery';
import Handlebars from 'handlebars';
import _ from 'underscore';
import template from 'templates/word.html';

var WordAssociationList = require('components/wordAssociationWords');
var significantResponse = 0;
var wordTemplate = Handlebars.compile(template);
var currentWord;

var app = {
  init: function(){
    app.render();
  },
  render: function(){
    app.getIndexOfWord();
  },  
  showNextWord: function(currentIndex){
    $('.word-container').html(currentWord); 
    currentIndex += 1
  },
  getIndexOfWord: function(){
    _.each(WordAssociationList, function(word){
      var currentIndex = WordAssociationList.indexOf(word);
      currentWord = wordTemplate(WordAssociationList[currentIndex]);
    });
    $('button').on('click', function(){
      app.showNextWord();
    });
  },
  countSignificantResponses: function(){
    $('.response').click(function(){
      significantResponse += 1;
      $('.sig-response').html('Significant Responses: ' + ' ' + significantResponse);
    });
  }
};
  
module.exports = app;