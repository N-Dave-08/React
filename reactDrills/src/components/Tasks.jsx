import React from 'react';

export default function Tasks({ index, name, onDelete }) {
  return (
    <li>
      {name} <button onClick={onDelete}>x</button>
    </li>
  );
}
