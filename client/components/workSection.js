import $ from 'jquery';

import photoSearchJs from 'components/photoSearch';
import photoSearchHtml from 'templates/photoSearch.html';

var app = {
  init: function(){  
    app.render();
  },
  render: function(){
    app.loadProjects();
    app.initializeProjects();
  },
  loadProjects: function(){
    $('.photo-search-container').html(photoSearchHtml);
  },
  initializeProjects: function(){
    photoSearchJs.init();
  }
};

module.exports = app;
