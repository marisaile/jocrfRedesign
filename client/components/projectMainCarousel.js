
var $ = require('jquery');
window.jQuery = window.$ = $;
require('bootstrap');
import Handlebars from 'handlebars';



var app = {
  init: function() {
    app.render();
  },
  render: function() {
    $('.carousel').carousel({
      interval: 2000
    })
  }
};
module.exports = app;