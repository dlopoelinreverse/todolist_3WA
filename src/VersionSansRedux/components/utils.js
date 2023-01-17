export const setTitle = (title) => {
  return { type: "set_title", title };
};

export const addTodo = (newTodo) => {
  return { type: "add", todo: newTodo };
};

/**
 *
 * @param {string} title todo's title
 * @returns {object} the newTodo object newly created
 */
export const createNewTodo = (title) => ({
  id: Date.now().toString(),
  title,
  isCompleted: false,
  isEditing: false,
});
