import React from 'react'

const Task = ({ task }) => {
    return (
        <div className='task'>
            Task component is here
            <h3>
                { task.text }
            </h3>

            <p>
                { task.day }
            </p>
        </div>
    )
}

export default Task