
import $ from 'jquery';
import 'styles/main.scss';
import mainNavbar from 'components/mainNavbar';
import todos from 'pages/todo';
import funnySquares from 'pages/funnySquares';
import project from 'pages/project';

$(function() {

  mainNavbar.init();


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
  }
});
