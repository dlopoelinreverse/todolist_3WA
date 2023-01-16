import React, { useEffect, useReducer, useState } from 'react'
import TodoTitle from './TodoTitle'

// const reducer = (state, action) => {
//     switch(action.type) {
//         case "completed" : 
//             return {
//                 ...state,
//                 isCompleted: true,
//             }
//         case "cancelComplete": 
//         return {
//             ...state,
//             isCompleted: false,
//         }
//         case 'editing':
//             return {
//                 ...state,
//                 isEditing: true,
//                 isCompleted: false,
//             }
//             default:
//                 return state
//     }
// }

export default function TodoItem({todo}) {
    // const [state, dispatch] = useReducer(reducer, todo)
    const [completed, setCommpleted] = useState(todo.isCompleted)
    const handleComplete = (e) => {
        const {checked} = e.target
        if (checked) setCommpleted(true)
        else setCommpleted(false)
        // if (checked) dispatch({type : "completed"})
        // else dispatch({type: "cancelComplete"})
    }
    // const handleDoubleClick = (e) => {
    //     dispatch({type: 'editing'})
    // }
    // useEffect(() => {
    //     console.log("Todo update");
    // }, [state])
  return (
    <>        
        <input type="checkbox" onChange={handleComplete}/>
        {/* {state.isCompleted ? <h2 onDoubleClick={handleDoubleClick}>{todo.title}</h2> : <h2 onDoubleClick={handleDoubleClick}>{todo.title}</h2>} */}
        <TodoTitle title={todo.title} completed={completed} />
        {/* {state.isEditing ? (<h4>Edit</h4>): (<h4>Not edit</h4>)} */}
    </>
  )
}
