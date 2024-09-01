import React from 'react'
import Task from './Task'

function Home() {
  return (
    <div class="todo-container">
        <div class="todo-header">
            <h1>My To-Do List</h1>
        </div>
        <div class="input-container">
            <form action="">

            <input type="text" class="todo-input" placeholder="Add a new task..." />
            <button class="add-btn" type='submit'>Add</button>
            </form>
        </div>

        <Task />

        
    </div>
  )
}

export default Home
