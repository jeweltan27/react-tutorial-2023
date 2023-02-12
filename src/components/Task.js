import React from 'react'

const Task = ({ task }) => {
    return (
        <div className='task'>
            <h3>
                { task.text }
            </h3>

            <p>
                { task.day }
            </p>

            <p>
                Remind me? { task.reminder ? 'Yes' : 'No' }
            </p>
        </div>
    )
}

export default Task