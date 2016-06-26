import $ from 'jquery';
import mainHeader from 'components/mainHeader';
import mainMain from 'components/mainMain';

var app = {
  init: function() {
  	mainHeader.init();
  	mainMain.init();
    app.render();
  },
  render: function() {
    
  }
};

module.exports = app;
