import { useEffect, useReducer } from "react";
import TodoFilter from "./TodoFilter";
import TodoItem from "./TodoItem";
import { addTodo, createNewTodo, setTitle } from "./utils";


// source de véritié
const initialState = { todos: [], filter: undefined, count: 0, title: "" };

function reducer(state, action) {
  let newTodos;
  switch (action.type) {
    case "add":
      const todos = [...state.todos, action.todo];

      // renvoi une copie pour et la même structure des données => re-render
      return {
        ...state,
        todos: todos,
        count: state.count + 1,
        title: "",
      };

    // controle de champ input
    case "set_title":
      return {
        ...state,
        title: action.title,
      };

    case "toggle_isCompleted":
      newTodos = state.todos.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      });
      return {
        ...state,
        todos: newTodos,
      };

    case "change_filter":
      return {
        ...state,
        filter: action.filterType,
      };

    case "delete_todo":
      newTodos = state.todos.filter((todo) => todo.id !== action.id);
      return {
        ...state,
        todos: newTodos,
        count: state.count --
      };

    case "change_todo_isEditing":
      newTodos = state.todos.map((todo) => {
        if (todo.id === action.id) {
          return {
            ...todo,
            isEditing: !todo.isEditing,
          };
        }
        return todo;
      });
      return {
        ...state,
        todos: newTodos
      }
      case "edit_todo":
        newTodos = state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              title: action.payload.inputValue,
              isEditing: false,
            }
            
          } return todo})
        return {
          ...state,
          todos: newTodos,            
          }
        
    default:
      throw new Error();
  }
}


const InputTodo = () => {
  // la fonction reducer et l'initialState
  const [state, dispatch] = useReducer(reducer, initialState);

  // Controle des valeurs saisies dans l'input
  const handleChange = (e) => {
    const { name, value } = e.target;

    dispatch(setTitle(value));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const newTodo = createNewTodo(state.title);
      dispatch(addTodo(newTodo));
    }

    if (e.key === "Escape") dispatch(setTitle(""));
  };

  const toggleIsCompleted = (todoId) => {
    dispatch({
      type: "toggle_isCompleted",
      id: todoId,
    });
  };

  const changeFilter = (filterType) => {
    dispatch({ type: "change_filter", filterType });
  };

  const deleteTodo = (id) => {
    dispatch({ type: "delete_todo", id });
  };

  const changeTodoIsEditing = (id) => {
    dispatch({ type: "change_todo_isEditing", id });
  };

  const handleEditTitleChange = (inputValue, id) => {
    dispatch({type: "edit_todo", payload: inputValue, id})
  };

  

  return (
    <div className="App">
      <p>
        <input
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          type="text"
          name="title"
          value={state.title}
        />
      </p>
      <TodoFilter changeFilter={changeFilter} />
      <p>Nb de todo(s) : {state.count}</p>
      {state.todos
        .filter((todo) => {
          if (state.filter === undefined) return todo;
          return todo.isCompleted === state.filter;
        })
        .map((todo) => (
          <TodoItem
            key={todo.id}
            {...todo}
            toggleIsCompleted={toggleIsCompleted}
            deleteTodo={deleteTodo}
            changeTodoIsEditing={changeTodoIsEditing}
            handleEditTitleChange={handleEditTitleChange}
          />
        ))}
    </div>
  );
}


export default InputTodo;