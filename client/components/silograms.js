import $ from 'jquery';
// var moment = require('moment');
var silograms = require('components/siloSample');
import Handlebars from 'handlebars';
import template from 'templates/siloSample.html';
import _ from 'underscore';

var points = 0;
var app = {
  init: function(){
    app.render();
  },
  render: function(){
    var compiledTemplate = Handlebars.compile(template);
    var $nextWord = $('.next-word');
    var counter = 0;

    var silogramsHtml = _.map(silograms, function(word){
      return compiledTemplate(word);
    });

    function showWords(){
      $nextWord.html(silogramsHtml[counter]);
      counter++;
      if (counter > silogramsHtml.length) {
        $nextWord.html('');
        clearInterval();
        $('.answer-container').removeClass('hidden');
      }
    }
    $('.start-silo').click(function(e){
      e.preventDefault();
      $('.instructions-container-silo').html('');
      setInterval(showWords, 2000);
    });
    $('.submit-responses-silo').click(function(e){
      e.preventDefault();
      if ($('.foo').val() === 'girl') {
        points++;
      } if ($('.nesp').val() === 'horse') {
        points++;
      } if ($('.bar').val() === 'with') {
        points++;
      } if ($('.arilom').val() === 'between') {
        points++;
      } if ($('.baz').val() === 'run') {
        points++;
      } if ($('.tupral').val() === 'broad') {
        points++;
      }
      $('.answer-container').html('You got' + ' ' + points + ' ' + 'words correct!');
    });
  }
};  

module.exports = app;