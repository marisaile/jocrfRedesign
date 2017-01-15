import $ from 'jquery';
import nav from 'templates/navigation.html';

var app = {
	init: function(){
		app.render();
	}, 
	render: function(){
		$('body').html(nav);
	}
};

module.exports = app;