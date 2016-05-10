
var $ = require('jquery');

// legacy loading for bootstrap
window.jQuery = window.$ = $;
require('bootstrap');

import _ from 'underscore';
import Handlebars from 'handlebars';
import lscache from 'lscache';

  
// Data Model
var savedData = lscache.get('todos');
var todos = [];
if (savedData === null) {
  todos = [];
} else {
  todos = savedData;
}


// Application
var template;
var app = {
  init: function(){
    // sets things up
    app.compileTemplates();
    app.render();
  },
  render: function(){
    lscache.set('todos', todos);
    var todoHtml = _.map(todos, function(todo){
      return template(todo);
    });
    app.unbindEvents();
    $('ul.list-group').html(todoHtml.join(''));
    app.bindEvents();
  },
  compileTemplates: function(){
    template = $('[type="text/x-template"]');
    template = Handlebars.compile(template.first().html());
  },
  unbindEvents: function(){
    $('.list-group-item').off();
    $('.add-todo-container button').off();
    $('input[type="checkbox"]').off();
    $('.list-group-item button').off();
  },
  bindEvents: function(){
    app.bindHoverEvents();
    app.bindCheckboxEvents();
    app.bindAddTodoEvents();
    app.bindRemoveTodoEvents();
  },
  bindHoverEvents: function(){
    var $items = $('.list-group-item');
    $items.on('mouseover', function(){
      $(this).addClass('list-group-item-success');
    });
    $items.on('mouseout', function(){
      $(this).removeClass('list-group-item-success');
    });
  },
  bindCheckboxEvents: function(){
    var $checkboxes = $('input[type="checkbox"]');
    $checkboxes.on('change', function(){
      var isChecked = !$(this).is(':checked');
      if (isChecked) {
        $(this).parent().parent().removeClass('disabled');
      } else {
        $(this).parent().parent().addClass('disabled');
      }
    });
  },  
  bindAddTodoEvents: function(){
    var addTodo = function(){
      var newTodoTitle = $('.add-todo-container input').val();
      if (_.isString(newTodoTitle) && newTodoTitle.length > 2) {
        var newTodoObject = { title: newTodoTitle, completed: false };
        todos.push(newTodoObject);
        $('.add-todo-container input').val(''); 
        app.render();
      }
    };
    $('.add-todo-container button').on('click', addTodo);
    $(document).keypress(function(event){
      var kcode = (event.keyCode);
      if (kcode === 13) {
        addTodo();
      }
    });
  },                         
bindRemoveTodoEvents: function(){
    $('.list-group-item button').on('click', function(){
      var index = $(this).parent().parent().index();
      todos.splice(index, 1);
      app.render();
    });
  }
};

module.exports = app;
