import React, { useState } from 'react';
import { addTask } from '../actions/addTask';
import { deleteTask } from '../actions/deleteTask';
import { dummyList } from '../data/dummyData';

export const Index = () => {

  const [tasks, setTasks] = useState(dummyList);

  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='Enter task here...'
      />
      <button
        onClick={() => addTask(tasks, setTasks, inputValue, setInputValue)}>
        Add
      </button>
      <ul>
        {tasks.map((task, index) => (
          <li
            key={task.id}
            >
            {task.name}
            <button onClick={() => deleteTask(tasks, setTasks, index)}>x</button>
             </li>
        ))}
      </ul>
    </div>
  )
};

export default Index;