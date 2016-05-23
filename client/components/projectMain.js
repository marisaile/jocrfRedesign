var $ = require('jquery');
window.jQuery = window.$ = $;
require('bootstrap');

import projectMain from 'templates/projectMain.html';
import projectMainTitle from 'templates/projectMainTitle.html';
import projectMainSidebar from 'templates/projectMainSidebar.html';
import projectMainBackground from 'templates/projectMainBackground.html';

var app = {
  init: function() {
    

    app.render();
  },
  render: function() {
    
    $('.project-main').append(projectMain);
    $('.project-main').append(projectMainTitle);
    $('.project-main').append(projectMainBackground);
    $('.project-main').append(projectMainSidebar);

  }
};

module.exports = app;
