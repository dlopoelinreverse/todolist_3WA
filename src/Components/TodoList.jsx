import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
// import TodoItem from './TodoItem';
import TodoItemReducer from './TodoItemReducer';

export default function TodoList(
    // {todos}
    ) {
    const todos = useSelector(state => state.todos.todos)
    const filter = useSelector(state => state.filter)
    const [filteredTodos, setFilteredTodos] = useState([])
    

    // const [todosList, setTodosList] = useState([]);
    // // const [askConfirm, setAskConfirm] = useState(false);

    // const handleDelete = (e) => {
    //     const list = todosList;
    //     // setAskConfirm(!askConfirm);
        
    //     setTodosList(list.filter(todo => todo.id !== parseInt(e.target.id)));
       
    // }
    useEffect(() => {
      
        
          switch(filter.filter) {
            case "reset":
              return setFilteredTodos(todos)
            case "completed":
            return setFilteredTodos(todos.filter(todo => todo.isCompleted === true))
            case "!completed":
            return setFilteredTodos(todos.filter(todo => todo.isCompleted === false))
            // ou juste balancer un filterType true/false dans le state et recupérer puis filtrer les todos par celui-ci simplement un if pour la remise a zero des filtre
            default:
              return todos        
        }
    }, [todos, filter])

  return (
    <div className="todo-list-container">
        <ul className='todos-container'>
            {filteredTodos && filteredTodos.map(todo => <TodoItemReducer key={todo.id}
             todo={todo} 
            // {...todo}
             />)}

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
