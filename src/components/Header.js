import React from 'react'
import { useState } from 'react'
import AddTask from './AddTask'





const Header = () => {
    const[show, setShow] = useState(true)


  return (
    <div>
        <h1>Task Tracker</h1>
        <button onClick={() => setShow(!show)} className='btn1'>{show ? "Show Add Task Bar" : "Close Add Task Bar"}</button>

        {!show && <AddTask/>}
    </div>
  )
}

export default Header