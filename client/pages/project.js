
import projectHeader from 'components/projectHeader';
import projectMain from 'components/projectMain';
import projectFooter from 'components/projectFooter';

var app = {
  init: function(){
    app.render();
  }, 
  render: function() {
    projectHeader.init();
    projectMain.init();
    projectFooter.init();
  }
};
module.exports = app;
