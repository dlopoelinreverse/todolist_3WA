import React from 'react'
import Filter from './Filter'

export default function TodoFilter() {
    const filters = [
        {id: "reset", name: "annuler filtre", filterAction: null},
        {id: "completed", name: "fait", filterAction: "true"},
        {id: "!completed", name: "à faire", filterAction: "false"},
    ]

    
  return (
    <div className="todo-filter-container">
        <fieldset>
            {filters.map((filter, id) => (
                <Filter key={id} filter={filter} />
            ))}
        </fieldset>
    </div>
  )
}
