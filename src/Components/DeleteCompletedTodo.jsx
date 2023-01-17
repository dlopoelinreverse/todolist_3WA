import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeCompletedTodos } from '../features/todolist/todoListSlice'

export default function DeleteCompletedTodo() {    
    const completedIds = useSelector(state => state.todos.todos.filter(todo => todo.isCompleted === true).map(todo => todo.id))
    const [isDisabled, setIsDisabled] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
       
    }, [completedIds])
   
  return (
    <button onClick={() => dispatch(removeCompletedTodos(completedIds))} disabled={isDisabled}>Supprimer todos copplétées</button>
  )
}
