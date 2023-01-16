import { createSlice } from "@reduxjs/toolkit";
import { current } from "@reduxjs/toolkit";
const initialState = {
  todos: [],
  id: 1,
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
        (todo) => todo.id === action.payload
      );
      if (todoToTouch) todoToTouch.isCompleted = !todoToTouch.isCompleted;
      // todoToTouch.isCompleted = !todoToTouch.isCompleted;
    },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, handleComplete } = todoListSlice.actions;

export default todoListSlice.reducer;
