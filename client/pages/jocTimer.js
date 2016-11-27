import $ from 'jquery';

import timerGen from 'templates/genericTimer.html';
import timerTD from 'templates/tweezerTimer.html';
import timerObs from 'templates/observationTimer.html';

import generic from 'components/timerGen';
import tweezer from 'components/tweezerDexterity';
import observation from 'components/timerObs';

var app = {
	init: function(){
		app.render();
	},
	render: function(){
		$('.stopwatch-container').html(timerGen);
		app.bindClickEvents();
	},
	showGenericTimer: function(){
		$('.generic').on('click', function(){
			$('.stopwatch-container').html(timerGen);
			generic.init()
		});
	}, 
	showTimerA: function(){
		$('.observation').on('click', function(){
			$('.stopwatch-container').html(timerObs);
			observation.init();
		});
	}, 
	showTimerB: function(){
		$('.tweezer').on('click', function(){
			$('.stopwatch-container').html(timerTD);
			tweezer.init();
		});
	}, 
	bindClickEvents: function(){
		app.showGenericTimer();
		app.showTimerA();
		app.showTimerB();	
	}
};

module.exports = app;