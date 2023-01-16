import React, { useEffect, useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todolist/todoListSlice";
import TodoList from "./TodoList";


// const initialState = { todos: [], id: 1, title : ''};

// function reducer(state, action) {
//   switch (action.type) {
//     case 'setTodoTitle':
//       return {
//         ...state, 
//         title : action.todoTitle
//       };
//       case "addNewTodo":
//         return {
//             ...state,
//             id: state.id ++,
//             title: "",
//             todos: [...state.todos, action.newTodo]
//         }
//         case "resetInput":
//             return {
//                 ...state,
//                 title: "",
//             }
//     default:
//       throw new Error();
//   }
// }

const TodoInput = () => {
    // const [todosReducer, dispatch] = useReducer(reducer, initialState);
    const [inputTitle, setInputTitle] = useState("")
    const dispatch = useDispatch()
 
  const handleInput = (e) => {
    let { target } = e;
    let { value } = target;

    setInputTitle(value)
    // dispatch({type : "setTodoTitle", todoTitle : value})
    
  };
  const handleKey = (e) => {
    const { key } = e;

    if (key === "Enter") {
        if (inputTitle.length > 0) {
            dispatch(addTodo(inputTitle))
            setInputTitle("")
        } 
    //   const todo = {
    //     id: todosReducer.id,
    //     title: todosReducer.title,
    //     isCompleted: false,
    //     isEditing: false,
    //   };
    //   dispatch({type: "addNewTodo", newTodo : todo});
    } else if (key === "Escape") {
        setInputTitle("")
        // dispatch({type: "resetInput", inputValue: ""})
    }
  };

//   useEffect(() => {
//     // console.log(todosReducer.todos);
//   }, [todosReducer.todos]);

  return (
    <div className="input-container">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="title"
          value={inputTitle}
        //   value={todosReducer.title}
        //   garder le controle sur la value, bonne pratique faire en sorte que react controle tout
          onChange={handleInput}
          onKeyDown={handleKey}
        />
      </form>
      <TodoList 
    //   todos={todosReducer.todos} 
      />
    </div>
  );
};

export default TodoInput;
