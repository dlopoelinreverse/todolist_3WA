import React, { useEffect, useRef, useState } from "react";

export default function TodoItem({
  id,
  title,
  isCompleted,
  isEditing,
  deleteTodo,
  toggleIsCompleted,
  changeTodoIsEditing,
  handleEditTitleChange,
  ...props
}) {

    const inputRef = useRef();

    const handleOnKeyDown = (e) => {
      
      const {key} = e;

      if (key === "Enter") {
        if (inputRef.current.value !== title) {
          console.log(inputRef.current.value);
          handleEditTitleChange(inputRef.current.value, id);
          changeTodoIsEditing(id);
          inputRef.current.value = "";
        } else {
          changeTodoIsEditing(id);
        }
      }else if (key === "Escape") {
        inputRef.current.value = ""
        changeTodoIsEditing(id);
      }
      
    }
    useEffect(() => {
        if(isEditing) {
            inputRef.current = document.querySelector('#edit-input')
            inputRef.current.value = title;
        }
      
    }, [isEditing])
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => toggleIsCompleted(id)}
      />
      {
        isEditing ? <input id="edit-input" ref={inputRef} type="text" onKeyDown={handleOnKeyDown} /> : <span className={isCompleted ? "todo-title striked" : "todo-title"} onDoubleClick={() => changeTodoIsEditing(id)}>{title}</span>
      }
      
      <button onClick={() =>deleteTodo(id)}>X</button>
    </div>
  );
}