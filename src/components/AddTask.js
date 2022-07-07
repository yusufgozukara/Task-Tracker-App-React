import React from 'react'

const AddTask = () => {
  return (
    <div>
        <form>
            <div className='formdiv'>
                <label className='addtaskh3' htmlFor="task">Task</label>
                <input type="text" placeholder='Add Task' required/>
            </div>
            <div>
                <label className='addtaskh3' htmlFor="day">Day&Time</label>
                <input type="datetime-local" name="day" id="day" required/>
            </div>
            <div>
                <button type='submit' className='savetask'>Save Task</button>
            </div>
        </form>
        
    </div>
  )
}

export default AddTask