import $ from 'jquery';

import breakoutGame from 'pages/breakout';
import funnySquares from 'pages/funnySquares';
import photoSearch from 'pages/photoSearch';


var app = {
  init: function(){  
    app.render();
  },
  render: function(){
    breakoutGame.init();
    funnySquares.init();
    photoSearch.init();
  }
};

module.exports = app;
