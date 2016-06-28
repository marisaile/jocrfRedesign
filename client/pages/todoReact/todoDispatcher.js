
import todoModel from './todoModel';

var dispatcher = {
  clickComplete: function(id){
    todoModel.itemCompleted(id);
  },
  addTodo: function(newTitle){
    if (
      newTitle !== '' 
      && typeof newTitle === 'string'
    ) { 
      todoModel.addItem(newTitle);
    } 
  },
  addTodoEnter: function(newTitle){
    if ( 
      newTitle !== '' 
      && typeof newTitle === 'string'
    ) {
      todoModel.addItem(newTitle);
    }
  },
  removeTodo: function(id){
    todoModel.removeItem(id);
  },
  editTodoTitle: function(id, title, event){
    if (
      event.which === 13 
      && title.length > 0
      && typeof title === 'string'
    ) {
      todoModel.editTitle(id, title);
    }
  },
  startEditMode: function(id){
    todoModel.startEditing(id);
  }
};

module.exports = dispatcher;

