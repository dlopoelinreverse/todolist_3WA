import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";
const initialState = {
  todos: [],
  id: 1,
  filter: undefined,
};

export const todoListSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: state.id,
        title: action.payload,
        isCompleted: false,
        isEditing: false,
      };
      state.todos = [...state.todos, todo];
      state.id += 1;
    },
    handleComplete: (state, action) => {
      const todoToTouch = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      if (todoToTouch) todoToTouch.isCompleted = action.payload.checked;
    },
    setEdit: (state, action) => {
      const todoToTouch = state.todos.find(
        (todo) => todo.id === action.payload
      );
      if (todoToTouch) todoToTouch.isEditing = !todoToTouch.isEditing;
    },
    handleEdit: (state, action) => {
      const todoToTouch = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      if (todoToTouch) {
        todoToTouch.title = action.payload.newTitle;
        todoToTouch.isCompleted = false;
        todoToTouch.isEditing = false;
      }
    },
    removeCompletedTodos: (state, action) => {
      state.todos = state.todos.filter(
        (todo) =>
          // !action.payload.includes(todo.id)
          !todo.isCompleted
      );
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addTodo,
  handleComplete,
  setEdit,
  handleEdit,
  removeCompletedTodos,
} = todoListSlice.actions;

export default todoListSlice.reducer;
