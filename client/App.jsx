
import $ from 'jquery';
import 'styles/main.scss';
import mainPage from 'components/mainPage';
import todos from 'pages/todo';
import funnySquares from 'pages/funnySquares';
import project from 'pages/project';
import d3 from 'pages/d3';

$(function() {

  mainPage.init();


  var url = window.location.pathname;

  // our first javascript router!
  switch (url) {
    case '/pages/todo.html':
      todos.init();
    break;
    case '/pages/funnySquares.html':
      funnySquares.init();
    break;
    case '/pages/projectHome.html':
      project.init();
    break;
    case '/pages/d3.html':
      d3.init();
    break;
  }
});
