import $ from 'jquery';

import landing from 'templates/landingPage.html';
import work from 'templates/workPage.html';

var app = {
  init: function() {  
    app.render();
  },
  render: function() {
  	$('.landing-override-bootstrap').html(landing);
  	$('.work').on('click', function(){
  		$('.landing-override-bootstrap').html(work);
  	});
  }
};

module.exports = app;
