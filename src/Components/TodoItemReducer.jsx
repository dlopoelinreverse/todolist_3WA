import React from 'react'
import { useDispatch } from 'react-redux';
import { handleComplete, setEdit } from '../features/todolist/todoListSlice';
import EditItem from './EditItem';

export default function TodoItemReducer({todo}) {
    const dispatch = useDispatch()
    const handleDoubleClick = () => {
        dispatch(setEdit(todo.id))
    }
    const handleCheck = (e) => {
        dispatch(handleComplete({id: todo.id, checked: e.target.checked}))
    }
  return (
        <fieldset>
    <li>
        {todo.isEditing ? (
            <EditItem todo={todo} />
            ) : (
                <>
            <h5 style={todo.isCompleted ? {textDecorationLine: 'line-through'} : null}onDoubleClick={handleDoubleClick}>{todo.title}</h5>
            {todo.isCompleted && <span>Todo complétée</span>}
            <br />
            <input type="checkbox" onInput={handleCheck} defaultChecked={todo.isCompleted} />
            </>
            )}
    </li>
            </fieldset>
  )
}
