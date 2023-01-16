import React, { useEffect, useReducer } from "react";
import TodoList from "./TodoList";


const initialState = { todos: [], id: 1, title : ''};

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      // renvoi une copie pour et la même structure des données => re-render 
      return {
        ...state,
        count: state.count + 1,
      };
    case 'setTodoTitle':
      return {
        ...state, 
        title : action.todoTitle
      };
      case "addNewTodo":
        return {
            ...state,
            id: state.id ++,
            todos: [...state.todos, action.newTodo]
        }
        case "resetInput":
            return {
                ...state,
                title: "",
            }
    default:
      throw new Error();
  }
}

const TodoInput = () => {
    const [todosReducer, dispatch] = useReducer(reducer, initialState);
 
  const handleInput = (e) => {
    let { target } = e;
    let { value } = target;

    dispatch({type : "setTodoTitle", todoTitle : value})
    
  };
  const handleKey = (e) => {
    const { key } = e;

    if (key === "Enter") {
      const todo = {
        id: todosReducer.id,
        title: todosReducer.title,
        isCompleted: false,
        isEditing: false,
      };
      console.log(todo);
      dispatch({type: "addNewTodo", newTodo : todo})
      dispatch({type: "resetInput"})
    } else if (key === "Escape") dispatch({type: "resetInput", inputValue: ""})
  };

  useEffect(() => {
    console.log(todosReducer.todos);
  }, [todosReducer.todos]);

  return (
    <div className="input-container">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="title"
          value={todosReducer.title}
        //   garder le controle sur la value, bonne pratique faire en sorte que react controle tout
          onChange={handleInput}
          onKeyDown={handleKey}
        />
      </form>
      <TodoList todos={todosReducer.todos} />
    </div>
  );
};

export default TodoInput;
