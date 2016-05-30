
import projectHeader from 'components/projectHeader';
import projectLearnMenu from 'components/projectLearnMenu';
import projectMain from 'components/projectMain';
import projectFooter from 'components/projectFooter';

var app = {
  init: function(){
    app.render();
  }, 
  render: function() {
    projectHeader.init();
    projectLearnMenu.init();
    projectMain.init();
    projectFooter.init();
  }
};
module.exports = app;
