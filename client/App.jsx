
import $ from 'jquery';
import 'styles/main.scss';

import mainPage from 'pages/mainPage';
import writingPrompts from 'pages/writingPrompts';
// import timerObs from 'pages/timerObs';
// import wordAss from 'pages/wordAssociation';
// import jocTimer from 'pages/jocTimer';
// import timerGen from 'pages/timerGen';
import joc2012 from 'pages/joc2012';
import TodoListView from 'pages/todoReact/todoListView';
import funnySquares from 'pages/funnySquares';
import photoSearch from 'pages/photoSearch';
// import d3 from 'pages/d3';
// import three from 'pages/three';
// import bookController from 'pages/books/booksController';
import game from 'pages/breakout';
// import dalquest from 'pages/dalquest';

$(function() {

  mainPage.init();

  var url = window.location.pathname;

  switch (url) {
    
    case '/pages/writingPrompts.html':
      writingPrompts.init();
    break; 
    // case '/pages/timerObs.html':
    //   timerObs.init();
    // break;
    // case '/pages/timerGen.html': 
    //   timerGen.init();
    // break;
    // case '/pages/wordAssociation.html':
    //   wordAss.init();
    // break;
    // case '/pages/jocTimer.html':
    //   jocTimer.init();
    // break;
    case '/pages/breakout.html':
      game.init();
    break;
    case '/pages/joc2012.html':
      joc2012.init();
    break;
    case '/pages/todo.html':
      var todoListView = new TodoListView(); 
    break;
    case '/pages/funnySquares.html':
      funnySquares.init();
    break;
    // case '/pages/d3.html':
    //   d3.init();
    // break;
    // case '/pages/three.html':
    //   three.init();
    // break;
    case '/pages/photoSearch.html':
      photoSearch.init(); 
    break;
    // case '/pages/books.html':
    //   bookController.render();
    // break;
    // case '/pages/visualDesigns.html':
    //   vdt.init();
    // break;
    // case '/pages/dalquest.html':
    //   dalquest.init();
    // break;
    default: break;
  }
});
