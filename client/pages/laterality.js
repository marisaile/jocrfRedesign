
import glasses from 'templates/eyeDominanceGlasses.html';
import $ from 'jquery';

var app = {
	init: function(){
		app.render();
	},
	render: function(){
		$('.eye-dominance').html(glasses);
	}
};

module.exports = app;