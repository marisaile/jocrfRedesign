
var $ = require('jquery');

// legacy loading for bootstrap
window.jQuery = window.$ = $;
require('bootstrap');

import _ from 'underscore';
import Handlebars from 'handlebars';
import lscache from 'lscache';
import rawTemplate from 'templates/todoItem.html';

  
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
    template = Handlebars.compile(rawTemplate);
  },
  unbindEvents: function(){
    $('.list-group-item').off();
    $('.add-todo-container button').off();
    $('input[type="checkbox"]').off();
    $('.list-group-item button').off();
    $('.title-edit input').off();
  },
  bindEvents: function(){
    app.bindHoverEvents();
    app.bindCheckboxEvents();
    app.bindAddTodoEvents();
    app.bindRemoveTodoEvents();
    app.bindEditTodoEvents();
  },
  bindHoverEvents: function(){
    var $items = $('.list-group-item');
    $items.on('mouseover', function(){
      $(this).addClass('list-group-item-info');
    });
    $items.on('mouseout', function(){
      $(this).removeClass('list-group-item-info');
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
        var newTodoObject = { 
          title: newTodoTitle, 
          completed: false,
          id: todos.length
        };
        todos.push(newTodoObject);
        $('.add-todo-container input').val(''); 
        app.render();
      }
    };
    $('.add-todo-container button').on('click', addTodo);
    $(document).keypress(function(event){
      var key = (event.which);
      // if they hit the enter key
      if (key === 13) {
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
  },
  bindEditTodoEvents: function(){
    $('.title').on('click', function(){
      var $parent = $(this).parent();
      $parent.find('.title').addClass('hidden');
      $parent.find('.title-edit').removeClass('hidden');
    });
    $('.title-edit input').on('keypress', function(event){
      var key = (event.which);
      // if they hit the enter key
      if (key === 13) {
        var newTitle = $(this).val();
        var editId = $(this).attr('data-id');
        editId = parseInt(editId, 10);
        // update the title in our model
        var editTodo = _.filter(todos, function(todo){
          if (todo.id === editId) {
            return true;
          } 
          return false;
        });
        editTodo = editTodo[0];
        editTodo.title = newTitle;
        app.render();
      }
    });
  }
};

module.exports = app;



var Handlebars = window.Handlebars;
import lscache from 'lscache';

var database = [];
var model = {
  init: function(){
    var savedData = lscache.get('todos');
    if (savedData) {      
      database = savedData;
    } else {
      database = [];
    }
  },
  save: function(){
    var dataToSave = JSON.stringify(database);
    lscache.set('todos', dataToSave);
  },
  get: function(){
    return database;
  }
};

var view = $('script[type="text/x-template"]').html();

var controller = {
  init: function(){
    model.init();
    // cache some selectors
    controller.addButton = $('.btn-add');
    // start everything up
    controller.compiledTemplate = Handlebars.compile(view);
    controller.renderTemplates();
  },
  render: function(compiledTodos){
    // do all the visual stuff
    controller.destroyEventHandlers();
    $('.todo-list').html(compiledTodos.join(''));
    controller.createEventHandlers();
  },
  renderTemplates: function(){
    var compiledTodos = [];
    model.get().forEach(function(item, index){
      item.id = index + 1;
      var renderedTodo = controller.compiledTemplate(item);
      compiledTodos.push(renderedTodo);
    });
    controller.render(compiledTodos);
    model.save();
  },
  destroyEventHandlers: function(){
    controller.addButton.off();
    $('input[type="checkbox"]').off();
    $('.close').off();
  },
  createEventHandlers: function(){
    controller.addButton.on('click', controller.addTodoHandler);
    $('input[type="checkbox"]').on('change', controller.checkedHandler);
    $('.close').on('click', controller.removeHandler);
  },
  removeHandler: function(event){
    // which one was clicked??
    var index = $(event.currentTarget).parent().parent().index();
    // update the database
    model.get().splice(index, 1);
    // update the view
    controller.renderTemplates();
  },
  checkedHandler: function(event){
    // which checkbox?
    var index = $(event.currentTarget).parent().parent().index();
    // update the database
    model.get()[index].completed = !model.get()[index].completed;
    // console.log(model[index]);
    // view updates automatically, Yay HTML!
    model.save();
  },
  addTodoHandler: function(){
    var newTitle = $('.add-input').val();
    if (newTitle === '') return;
    model.get().push({
      title: newTitle,
      completed: false
    });
    $('.add-input').val('');
    controller.renderTemplates();
  }
};

module.exports = controller;
