
import projectHeader from 'components/projectHeader';
import projectMain from 'components/projectMain';

var app = {
  init: function(){
    app.render();
  }, 
  render: function() {
    projectHeader.init();
    projectMain.init();
  }
};
module.exports = app;
