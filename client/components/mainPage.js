
import mainHeader from 'components/mainHeader';

var app = {
  init: function() {  
    app.render();
  },
  render: function() {
    mainHeader.init();
  }
};

module.exports = app;
