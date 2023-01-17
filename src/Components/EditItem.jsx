import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { handleEdit, setEdit } from '../features/todolist/todoListSlice';

export default function EditItem({todo}) {
    const dispatch = useDispatch()
    const editedTitle = useRef()
    const handleKeyDown = (e) => {
        const {key} = e;
        
        if (key === "Enter") {
            if (editedTitle.current.value.length > 0 && editedTitle.current.value !== todo.title) {
                dispatch(handleEdit({id: todo.id, newTitle: editedTitle.current.value}))
                editedTitle.current.value = ""
            }
        } else if (key === "Escape") {
            editedTitle.current.value = ""

        }
    }
  return (
    <div className='edit-item-container'>
    <input type="text" defaultValue={todo.title} onKeyDown={handleKeyDown} ref={editedTitle} />
    <span onClick={() => dispatch(setEdit(todo.id))}>cancel edit</span>
    </div>
  )
}
