import { useState } from "react"

function ToDoList() {
    const [task, setTasks] = useState(["firstTask", "secondTask", "thirdTask"]);
    const [newTask, setNewTask] = useState("");

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(prevTask => ([...prevTask, newTask.trim()]));
            setNewTask("");
        }
    }

    function removeTask(index) {
        setTasks(prevTask => prevTask.filter((_, i) => i !== index));
    }


    return (
        <>
            <h1>To-do List</h1>
            <input type="text" id="" value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="Enter a task"/>
            <button onClick={addTask}>Add</button>
            <ul>
                {task.map((task, index) =>
                    <li key={index}>
                        {task}
                        <button onClick={() => (removeTask(index))}>Delete</button>
                    </li>)}
            </ul>
        </>
    );
}

export default ToDoList