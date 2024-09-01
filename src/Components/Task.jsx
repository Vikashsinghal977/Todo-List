import React from 'react'

const Task = ({title}) => {
  return (
    <div>
      <ul class="todo-list">
            <li>
                {title}
                <button class="delete-btn">Delete</button>
            </li>
           
        </ul>
    </div>
  )
}

export default Task
