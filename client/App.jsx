
import $ from 'jquery';
import 'styles/main.scss';
import landingPage from 'pages/landingPage';
import mainPage from 'components/mainPage';
import TodoListView from 'pages/todoReact/todoListView';
import funnySquares from 'pages/funnySquares';
import photoSearch from 'pages/photoSearch';
// import d3 from 'pages/d3';
// import three from 'pages/three';
import schoolBooks from 'pages/schoolBooks';
import bookController from 'pages/books/booksController';
import timer from 'pages/timer';
import vdt from 'pages/visualDesigns';
import dalquest from 'pages/dalquest';
import wordAss from 'pages/wordAssociation';

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
    // case '/pages/d3.html':
    //   d3.init();
    // break;
    // case '/pages/three.html':
    //   three.init();
    // break;
    case '/pages/schoolBooks.html':
      schoolBooks.init();
    break;
    case '/pages/photoSearch.html':
      photoSearch.init(); 
    break;
    case '/pages/books.html':
      bookController.render();
    break;
    case '/pages/timer.html':
      timer.init();
    break;
    case '/pages/visualDesigns.html':
      vdt.init();
    break;
    case '/pages/dalquest.html':
      dalquest.init();
    break;
    case '/pages/wordAssociation.html':
      wordAss.init();
    default: break;
  }

  // Fancy Console Message for Developers
  console.log('==============================================');
  console.log('===========I am looking for a job!============');
  console.log('==============================================');
});
