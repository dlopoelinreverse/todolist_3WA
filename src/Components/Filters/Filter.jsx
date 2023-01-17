import React from 'react'
import { useDispatch } from 'react-redux'
import { setFilter } from '../../features/todolist/filterSlice'

export default function Filter({filter}) {
    const dispatch = useDispatch()

    const handleFilter = (e) => {
        dispatch(setFilter({filterId: e.target.id, filterAction: filter.filterAction}))
    }

  return (
    <button id={filter.id} onClick={handleFilter}>{filter.name}</button>
  )
}
