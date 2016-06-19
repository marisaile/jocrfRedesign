
import $ from 'jquery';
import 'styles/main.scss';
import mainPage from 'components/mainPage';
import TodoControllerView from 'pages/todo/todoController';
import funnySquares from 'pages/funnySquares';
import project from 'pages/project';
import timer from 'pages/timer';
import formsBackbone from 'pages/formsBackbone';
import photoSearch from 'pages/photoSearch';

$(function() {

  mainPage.init();


  var url = window.location.pathname;

  // our first javascript router!
  switch (url) {
    case '/pages/todo.html':
      var todoControllerView = new TodoControllerView(); 
    break;
    case '/pages/funnySquares.html':
      funnySquares.init();
    break;
    case '/pages/projectHome.html':
      project.init();
    break;
    case '/pages/timer.html':
      timer.init();
    break;
    case '/pages/formsBackbone.html':
      formsBackbone.render(); 
    break;
    case '/pages/photoSearch.html':
      photoSearch.init(); 
    break;
    case '/pages/books.html':
      // bookClub.init();
    break;

    default: break;
  }

  // Fancy Console Message for Developers
  console.log('==============================================');
  console.log('===========I am looking for a job!============');
  console.log('==============================================');
});
