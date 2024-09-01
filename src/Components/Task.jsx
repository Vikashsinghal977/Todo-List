import React from 'react'

const Task = ({title}) => {
  return (
    <div>
      <ul className="todo-list">
            <li>
                {title}
                <button className="delete-btn">Delete</button>
            </li>
           
        </ul>
    </div>
  )
}

export default Task
