import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./features/todolist/todoListSlice";
import filterReducer from "./features/todolist/filterSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filter: filterReducer,
  },
});
