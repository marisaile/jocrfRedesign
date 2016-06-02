import $ from 'jQuery';
import projectLearnMenu from 'components/projectLearnMenu';

var app = {
  init: function() {
    app.render();
  },
  render: function() {
  	projectLearnMenu.init();
  }
};

module.exports = app;
