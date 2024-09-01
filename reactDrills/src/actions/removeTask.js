export default function removeTask(tasks, setTasks, index) {
    const newTask = tasks.filter((_, i) => i !== index);
    setTasks(newTask);
}