import $ from 'jquery';
import Handlebars from 'handlebars';
import vdtInstructions from 'templates/VDT/vdtInstructions.html';
import vdtItems from 'templates/VDT/vdtItems.html';

var instructionTemplate;
var itemsTemplate;
var items = require('components/vdtItems');
var currentIndex = 0

var app = {
  init: function(){
    app.compileTemplates();
    app.render();
  },
  render: function(){
    var frontPage = instructionTemplate({});
    $('.vdt-main').html(frontPage);
    app.bindEvents();
  },
  bindEvents: function(){
    app.startTest();
  },
  compileTemplates: function(){
    instructionTemplate = Handlebars.compile(vdtInstructions);
    itemsTemplate = Handlebars.compile(vdtItems);
  },
  startTest: function(){
    $('.btn-start').on('click', function(){
      $('.vdt-main').html(itemsTemplate(items[currentIndex]));
      // app.selectImage();
    });
  }
  // selectImage: function(){
  //   $('img').on('click', function(){
  //     $('img').animate({
  //       height: '200',
  //       width: '350'
  //     }, 500);
  //   });
  // }
};

module.exports = app;
