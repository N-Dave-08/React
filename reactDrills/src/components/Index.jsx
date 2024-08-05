import React, { useState } from 'react';
import Tasks from './Tasks';
import { addTask } from '../actions/addTask';
import { deleteTask } from '../actions/deleteTask';

export const Index = () => {

  const [tasks, setTasks] = useState([
    { id: 1, name: "make sandwich" },
    { id: 2, name: "clean the toilet" },
    { id: 3, name: "read books" },
  ]);

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
          <Tasks
            key={task.id}
            name={task.name}
            onDelete={() => deleteTask(tasks, setTasks, index)} />
        ))}
      </ul>
    </div>
  )
};

export default Index;