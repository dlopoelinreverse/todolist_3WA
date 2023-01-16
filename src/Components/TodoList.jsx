import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
// import TodoItem from './TodoItem';
import TodoItemReducer from './TodoItemReducer';

export default function TodoList(
    // {todos}
    ) {
    const todos = useSelector(state => state.todos.todos)
    

    // const [todosList, setTodosList] = useState([]);
    // // const [askConfirm, setAskConfirm] = useState(false);

    // const handleDelete = (e) => {
    //     const list = todosList;
    //     // setAskConfirm(!askConfirm);
        
    //     setTodosList(list.filter(todo => todo.id !== parseInt(e.target.id)));
       
    // }
    // useEffect(() => {
    //     setTodosList(todos)
    // }, [todos])

  return (
    <div className="todo-list-container">
        <ul className='todos-container'>
            {todos && todos.map(todo => <TodoItemReducer key={todo.id} todo={todo} />)}

        {/* {todosList && todosList.map(todo => (
            // <>
            // {askConfirm ? (<>
            // <button onClick={() => setAsk}>Biensûr</button>
            // <button onClick={() => setAsk}>Ah non en fait !</button>
            // </>):(
                
                <li key={todo.id}>
            <TodoItem key={todo.id} todo={todo}/>
            <button id={todo.id} onClick={handleDelete}>effacer</button>
            </li>
                // )}
                // </>
                ))} */}
                </ul>
    </div>
  )
}
