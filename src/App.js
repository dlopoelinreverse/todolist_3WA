import React from "react";
import Form from "./Components/Form";
import TodoFilter from "./Components/Filters/TodoFilter";
import TodoInput from "./Components/TodoInput";
import DeleteCompletedTodo from "./Components/DeleteCompletedTodo";
import InputTodo from "./VersionSansRedux/components/InputTodo";
import { useSelector } from "react-redux";
// import TodoInput from "./Components/TodoInput";

const App = () => {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <div className="app-container">
      {/* <InputTodo /> */}
      <TodoFilter />
      <TodoInput type="add" />
      {todos.some((todo) => todo.isCompleted) && <DeleteCompletedTodo />}
    </div>
  );
};

export default App;
