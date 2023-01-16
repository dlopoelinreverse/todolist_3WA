const initialState = { todos: [] };

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case "addNewTodo":
      return {
        todos: [state.todos, action.newTodo],
      };
    default:
      return state;
  }
}
