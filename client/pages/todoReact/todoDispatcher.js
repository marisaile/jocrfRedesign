
import todoModel from './todoModel';

var dispatcher = {
  init: function(){},
  clickComplete: function(id){
    todoModel.itemCompleted(id);
  },
  addTodo: function(newTitle){
    todoModel.addItem(newTitle);
  },
  removeTodo: function(id){
    todoModel.removeItem(id);
  },
  editTodoTitle: function(newTitle, id){
    todoModel.editTitle(newTitle, id);
  },
  startEditMode: function(id){
    todoModel.startEditing(id);
  }
};

module.exports = dispatcher;

