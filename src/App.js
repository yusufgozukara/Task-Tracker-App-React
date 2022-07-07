
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
// import data from '../src/helper/starterData';

function App() {

  const [tasks,setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  // console.log(tasks);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  
  }, [tasks])
  

  return (
    <div className='container'>
      <Header tasks = {tasks} setTasks = {setTasks}/>
    </div>
  );
}

export default App;
