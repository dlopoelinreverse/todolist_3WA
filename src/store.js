import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./features/todolist/todoListSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
