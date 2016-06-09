var $ = require('jquery');
window.jQuery = window.$ = $;
require('bootstrap');

// import projectMain from 'templates/projectMain.html';

var app = {
  init: function() {
    app.render();
  },
  render: function() { 
    // $('.project-main').append(projectMain);
  }
};

module.exports = app;
