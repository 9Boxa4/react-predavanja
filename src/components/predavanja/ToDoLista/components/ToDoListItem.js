import React from 'react'

const ToDoListItem =({todo,handleDelete}) =>
 {
  return (
        <li>
            {todo.title}
        <button onClick={()=> handleDelete(todo.id)}>Delete 
        </button>
        </li>
  )
}

export default ToDoListItem