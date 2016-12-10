
import $ from 'jquery';
import 'styles/main.scss';

import mainPage from 'pages/mainPage';
import writingPrompts from 'pages/writingPrompts';
import jocPage from 'pages/jocPage';
import TodoListView from 'pages/todoReact/todoListView';
import funnySquares from 'pages/funnySquares';
import photoSearch from 'pages/photoSearch';
import game from 'pages/breakout';
import frenzelReunion from 'pages/frenzelReunion';

$(function() {

  mainPage.init();

  var url = window.location.pathname;

  switch (url) {
    
    case '/pages/writingPrompts.html':
      writingPrompts.init();
    break; 
    case '/pages/breakout.html':
      game.init();
    break;
    case '/pages/jocPage.html':
      jocPage.init();
    break;
    case '/pages/todo.html':
      var todoListView = new TodoListView(); 
    break;
    case '/pages/funnySquares.html':
      funnySquares.init();
    break;
    case '/pages/photoSearch.html':
      photoSearch.init(); 
    break;
    case '/pages/frenzelReunion.html':
      frenzelReunion.init();
    break;
    default: break;
  }
});
