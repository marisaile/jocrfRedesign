import $ from 'jquery';
import vdtInstructions from 'templates/VDT/vdtInstructions.html';
import vdtItems from 'templates/VDT/vdtItems.html';

var app = {
  init: function(){
    app.render();
  },
  render: function(){
    $('.vdt-main').html(vdtInstructions);
    $('.btn-start').on('click', function(){
      $('.vdt-main').html(vdtItems);
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
