import $ from 'jQuery';


var app = {
  init: function() {
    app.render();
  },
  render: function() {
    $('.crocodile img').on('mouseover', function(){
      $('.crocodile img').animate({
        width: 75,
        top: 75
      }, 1000, 'swing');
    });
  }
};

module.exports = app;
