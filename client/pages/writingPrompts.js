var $ = require('jquery');

window.jQuery = window.$ = $;
require('bootstrap');

import template from 'templates/promptContainer.html';
import Handlebars from 'handlebars';
import _ from 'underscore';

var compiledTemplate;
var backgroundColors = ['#0ac2d2', '#030027', '#EE4B6A', '#ff9505', '#a81e9c', '#0B3954', '#EA3788', '#29002F', '#2bc016', '#ff4365', '#31cb00', '#3bceac', '#c04cfd', '#A833B9', '#f42b03', '#720eff', '#246EB9'];
var prompts = [];
var promptHtml = [];
var index = 0;

var app = {
  init: function(){
    app.compileTemplate();
    app.render();
  },
  render: function(){
    app.fetchPrompts();
    app.shuffleArray(backgroundColors);
    app.saveNewPrompt();
  },
  compileTemplate: function(){
    compiledTemplate = Handlebars.compile(template);
  },
  fetchPrompts: function(){
    $.ajax({
      url: '/api/writingPrompts',
      method: 'GET',
      complete: function(response){
        var dataString = response.responseText;
        var data = JSON.parse(dataString); 
        prompts = data;
        app.displayPrompt();
      }  
    }); 
  },
  saveNewPrompt: function(){
    $('.send-prompt').click(function(e){
      e.preventDefault();
      var prompt = $('#prompt-suggestion').val();
      $.ajax({
        url: '/api/addPrompt', 
        method: 'POST',
        data: {prompt: JSON.stringify(prompt)}
      });
    });
  },
  displayPrompt: function(){ 
    $(document).on('click', '.writing-prompts-button', function(e){
      e.preventDefault();
      promptHtml = _.map(prompts, function(prompt){
        return compiledTemplate(prompt);
      });
      // app.shuffleArray(backgroundColors);
      // var randomPrompt = promptHtml.slice(0, 1);
      $('.writing-prompt-container').html(promptHtml[++index % promptHtml.length]);
      // var randomColor = backgroundColors.slice(0, 1);
      $('.writing-prompts').css({
        'background-color': backgroundColors[++index % backgroundColors.length]
      });  
      // index++;
    });
  }, 
  shuffleArray: function(array){
    var m = array.length;
    var t;
    var i;
    while (m > 0) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }
};

module.exports = app;

