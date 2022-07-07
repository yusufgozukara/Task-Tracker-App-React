
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import data from '../src/helper/starterData';

function App() {

  const [tasks,setTasks] = useState(data);
  // console.log(tasks);

  return (
    <div className='container'>
      <Header tasks = {tasks}/>
    </div>
  );
}

export default App;
