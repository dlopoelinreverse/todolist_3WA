import React, { useEffect, useState } from 'react'
import TodoItem from './TodoItem';

export default function TodoList({todos}) {

    const [todosList, setTodosList] = useState([])

    const handleDelete = (e) => {
        const list = todosList;
        
        setTodosList(list.filter(todo => todo.id !== parseInt(e.target.id)));
       
    }
    useEffect(() => {
        setTodosList(todos)
    }, [todos])

  return (
    <div className="todo-list-container">
        {todosList && todosList.map(todo => (
            <div key={todo.id}>
            <TodoItem key={todo.id} todo={todo}/>
            <button id={todo.id} onClick={handleDelete}>effacer</button>
            </div>
        ))}
    </div>
  )
}
