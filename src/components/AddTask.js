import React from 'react'
import { useState } from 'react'

const AddTask = ({tasks}) => {

    const [task, setTask] = useState('');
    const [day, setDay] = useState('');
    // console.log(task);
    // console.log(day);

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = new Date().getTime();
        const newTask = {id:id, task:task, day:day, isDone:false};
        
    }


  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='formdiv'>
                <label className='addtaskh3' htmlFor="task">Task</label>
                <input type="text" value={task} placeholder='Add Task' required onChange={(e) => setTask(e.target.value)}/>
            </div>
            <div>
                <label className='addtaskh3' htmlFor="day">Day&Time</label>
                <input type="datetime-local" value={day} name="day" id="day" required onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div>
                <button type='submit' className='savetask'>Save Task</button>
            </div>
        </form>
        
    </div>
  )
}

export default AddTask