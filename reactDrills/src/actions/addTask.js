export default function addTask(tasks, setTasks, inputValue, setInputValue) {
    if (inputValue.trim()) {
        const newTask = {id: tasks.length + 1, name: inputValue.trim()};
        setTasks([...tasks, newTask]);
        setInputValue("");
    }
}