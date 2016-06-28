
import $ from 'jquery';
import 'styles/main.scss';
import mainPage from 'components/mainPage';
import TodoListView from 'pages/todoReact/todoListView';
import funnySquares from 'pages/funnySquares';
import timer from 'pages/timer';
import schoolBooks from 'pages/schoolBooks';
import photoSearch from 'pages/photoSearch';
import bookController from 'pages/books/booksController';

$(function() {

  mainPage.init();

  var url = window.location.pathname;

  switch (url) {
    case '/pages/todo.html':
      var todoListView = new TodoListView(); 
    break;
    case '/pages/funnySquares.html':
      funnySquares.init();
    break;
    case '/pages/timer.html':
      timer.init();
    break;
    case '/pages/probablyNothing.html':
      schoolBooks.init();
    break;
    case '/pages/photoSearch.html':
      photoSearch.init(); 
    break;
    case '/pages/books.html':
      bookController.render();
    break;
    default: break;
  }

  // Fancy Console Message for Developers
  console.log('==============================================');
  console.log('===========I am looking for a job!============');
  console.log('==============================================');
});
