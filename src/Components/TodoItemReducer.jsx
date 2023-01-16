import React from 'react'
import { useDispatch } from 'react-redux';
import { handleComplete } from '../features/todolist/todoListSlice';

export default function TodoItemReducer({todo}) {
    const dispatch = useDispatch()
    const handleDoubleClick = () => {
        dispatch(handleComplete(todo.id))
    }
  return (
    <li>
        <h5 style={todo.isCompleted ? {textDecorationLine: 'line-through'} : null}onDoubleClick={handleDoubleClick}>{todo.title}</h5>
    </li>
  )
}
