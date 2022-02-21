import React from 'react'
import ToDoListItem from './ToDoListItem'

const ToDoLista = ({todos,handleDelete})  =>
{
  return (
    <ul>
        {todos.length
        ? todos.map(todo =>
        (
            <ToDoListItem  
            key={todo.id} 
            todo={todo} 
            handleDelete={handleDelete}
            />
        ))
        : 'You are finished with your todo list. Congratz!'
    }
    </ul>
  );
};

export default ToDoLista