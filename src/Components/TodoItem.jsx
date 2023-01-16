import React, { useEffect, useReducer } from 'react'

const reducer = (state, action) => {
    switch(action.type) {
        case 'editing':
            console.log("edit");
            return {
                ...state,
                isEditing: true
            }
            default:
                return state
    }
}

export default function TodoItem({todo}) {
    // const initialState = todo


    const [state, dispatch] = useReducer(reducer, todo)
    const handleDoubleClick = (e) => {
        dispatch({type: 'editing'})
    }
    useEffect(() => {
        console.log("Todo update");
    }, [state])
  return (
    <div className="todo-item-container">
        <h2 onDoubleClick={handleDoubleClick}>{todo.title}</h2>
        {state.isEditing ? (<h4>Edit</h4>): (<h4>Not edit</h4>)}
    </div>
  )
}
