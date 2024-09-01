import React, {useState} from 'react'
import Task from './Task'

function Home() {
    const [task, setTask] = useState([]);

    const ChangeHendle = (event) => {
        event.preventDefault();
    }

  return (
    <div className="todo-container">
        <div className="todo-header">
            <h1>My To-Do List</h1>
        </div>
        <div className="input-container">
            <form onClick={ChangeHendle}>

            <input type="text" className="todo-input" placeholder="Add a new task..." />
            <button className="add-btn" type='submit'>Add</button>
            </form>
        </div>

        <Task />

        
    </div>
  )
}

export default Home
