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
    app.showPrompt();
  },
  showPrompt: function(){
    $('button').on('click', function(){
      currentWord = _.map(WordAssociationList, function(word){
        return wordTemplate(word);
      }); 
      $('.word-container').html(currentWord);
    });
    $('button').on('click', function(){
      _.each(WordAssociationList, function(word){
        currentWord = wordTemplate(word);
      }); 
    }); 
    app.countSignificantResponses(); 
  },
  countSignificantResponses: function(){
    $('.response').click(function(){
      significantResponse += 1;
      $('.sig-response').html('Significant Responses: ' + ' ' + significantResponse);
    });
  }
};
  
module.exports = app;