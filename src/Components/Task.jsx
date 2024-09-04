import React from 'react'

const Task = ({point}) => {
  return (
    <div>
      <ul class="todo-list">
            <li>
                {point}
                <button class="delete-btn">Delete</button>
            </li>
            
        </ul>
    </div>
  )
}

export default Task
