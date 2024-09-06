import React, {useEffect, useState} from 'react'
import Task from './Task'

function Home() {
  
  const initialArray = localStorage.getItem("task")
    ? JSON.parse(localStorage.getItem("task"))
    : [];

  const [task, setTask] = useState(initialArray);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    setTask( [...task, {
      title,
      description,
    }]);
    setTitle("")
    setDescription("")

  }

  const deleteTask = (index) => {

    const filtereArr = task.filter( (val, i ) => {
      return i!==index;
    })
    console.log(filtereArr)
    setTask(filtereArr)
  }

  useEffect( () => {
    localStorage.setItem("task",JSON.stringify(task))
  },[task])

  return (
    <div className='container'>

      <h1> Daily Goals </h1>

        <form action="" onSubmit={handleSubmit}>

            <input 
              type="text" 
              placeholder='Enter Title' 
              value={title} 
              onChange={ (e) => setTitle(e.target.value) }/>

            <textarea 
              placeholder='Enter Discription' 
              value={description} 
              onChange={ (e) => setDescription(e.target.value) }>

             </textarea>

            <button type='submit'>Add</button>

        </form>

        {task.map((item,index)=>(
          <Task 
          key={index} 
          title={item.title} 
          description={item.description}
          deleteTask={deleteTask} 
          index={index}/>

        ))}

    </div>
  )
}

export default Home
