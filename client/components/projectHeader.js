var $ = require('jquery');
window.jQuery = window.$ = $;
require('bootstrap');

import projectLearnMenu from 'components/projectLearnMenu'; 

var app = {
  init: function() {
    app.render();
  },
  render: function() {
    projectLearnMenu.init();
    $('.nav-list.learn').on('click', function(){
      if ($('ul.learn-menu:first').is(':hidden')) {
        $('ul.learn-menu').slideDown('slow');
      } else {
        $('ul.learn-menu').slideUp('slow');
      }
    }); 
  }
};
module.exports = app;
