import Task from './Task'
// props is { tasks }
const Tasks = ({ tasks }) => {
    
    return (
        <div>
            {/* Loop through each task in tasks and print out the text */}
            {tasks.map((task) => (
                // we still have the ID for unique key,
                // but we need to pass in the task as a prop
                <Task key={task.id} task={task} />
            ))}
        </div>
    )
}

export default Tasks