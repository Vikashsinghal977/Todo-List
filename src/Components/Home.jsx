import React, {useState} from 'react'
import Task from './Task'

function Home() {

  return (
    <div className='container'>
      <h1>Daily Goals</h1>
        <form action="">
            <input type="text" placeholder='Enter Title'/>
            <textarea placeholder='Enter Discription'></textarea>
            <button type='submit'>Add</button>
        </form>

    </div>
  )
}

export default Home
