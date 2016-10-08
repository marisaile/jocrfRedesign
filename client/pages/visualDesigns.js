import $ from 'jquery';
import Handlebars from 'handlebars';
import vdtInstructions from 'templates/VDT/vdtInstructions.html';
import vdtItems from 'templates/VDT/vdtItems.html';

var instructionTemplate;
var itemsTemplate;
var items;

var app = {
  init: function(){
    app.compileTemplates();
    app.render();
  },
  render: function(){
    var frontPage = instructionTemplate({});
    items = itemsTemplate({});
    $('.vdt-main').html(frontPage);
    app.bindEvents();
  },
  bindEvents: function(){
    app.startTest();
    app.selectImage();
  },
  compileTemplates: function(){
    instructionTemplate = Handlebars.compile(vdtInstructions);
    itemsTemplate = Handlebars.compile(vdtItems);
  },
  startTest: function(){
    $('.btn-start').on('click', function(){
      $('.vdt-main').html(items);
    });
  },
  selectImage: function(){
    $('#1a').on('click', function(){
      $('#1a').animate({
        height: '85%',
        width: '85%'
      }, 1000, 'easeInBounce');
    });
  }
};

module.exports = app;
