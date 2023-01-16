import React from 'react'

export default function TodoTitle({title, completed}) {
    console.log(completed);

    
  return (
    <div><h2>{title} : {completed}</h2></div>
  )
}
