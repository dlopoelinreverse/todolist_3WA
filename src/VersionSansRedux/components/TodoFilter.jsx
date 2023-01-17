// import React from 'react'

// export default function TodoFilter({todos, filteredTodos}) {

//   // const handleFilter = (e) => {
//   //   const {id} = e.target
//   //   switch (id) {
//   //     case "reset": 
//   //       filteredTodos("null");
//   //       break;
//   //       case "completed":
//   //         filteredTodos(todos.filter(todo => todo.isCompleted === true));
//   //         break;
//   //         case "!completed":
//   //           filteredTodos(todos.filter(todo => todo.isCompleted === false));
//   //           break;
//   //     default:
//   //       break;
//   //   }
//   // }
  
//   return (
//     <ul className='buttons-container'>
//       <button  onClick={() => filteredTodos()}>Reset</button>
//       <button onClick={() => filteredTodos(true)}>Fait</button>
//       <button onClick={() => filteredTodos(false)}>A faire</button>
//     </ul>
//   )
// }
import React from "react";

export default function TodoFilter({ changeFilter }) {
  return (
    <div className="todo-filter">
      <button onClick={() => changeFilter()}>All</button>
      <button onClick={() => changeFilter(true)}>Completed</button>
      <button onClick={() => changeFilter(false)}>Not completed</button>
    </div>
  );
}
