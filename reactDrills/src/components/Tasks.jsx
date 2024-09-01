import React from 'react'

export const Tasks = ({name, onDelete}) => {
  return (
    <li>{name} <button onClick={onDelete}>x</button></li>
  )
}
