import React, { useState } from 'react'
import { Tasks } from './Tasks'
import removeTask from '../actions/removeTask'
import addTask from '../actions/addTask';

export const Index = () => {

    const [tasks, setTasks] = useState([
        { id: 1, name: "first task" },
        { id: 2, name: "second task" },
        { id: 3, name: "third task" },
    ]);

    const [inputValue, setInputValue] = useState("");

    return (
        <div>
            <h1>To-do List</h1>
            <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder='Enter task here'
            />
            <button onClick={() => addTask(tasks, setTasks, inputValue, setInputValue)}>add</button>
            <ul>
                {tasks.map((task, index) =>
                    <Tasks
                        name={task.name}
                        key={index}
                        onDelete={() => removeTask(tasks, setTasks, index)}
                    />)}
            </ul>
        </div>
    )
}
