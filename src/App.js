import { useState } from 'react'

import Header from './Components/Header';
import Tasks from './Components/Tasks';

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Meeting at school',
      day: 'Feb 6th at 1:30pm',
      reminder: true
    },
    {
      id: 3,
      text: 'Food Shooping',
      day: 'Feb 5th at 2:30pm',
      reminder: false
    }
  ])

  // Delete Task ----> PROP DRILLING
  const delTask = (id) => {
    console.log(`Delete ${id}`);
    setTasks(tasks.filter((curTask) => {
      if(curTask.id != id)
        return curTask;
    }))
  };


  return (
    <div className="container">
      <Header title="Task Tracker" />
      {tasks.length > 0 ? 
        <Tasks tasks={tasks} onDelete={delTask}/> : 'No Task to display'
      }
      
    </div>
  );
}

export default App;
