import { useState } from 'react'

import Header from './Components/Header';
import Tasks from './Components/Tasks';
import AddTasks from './Components/AddTask';

function App() {

  const [showAddTask, setShowAddTask] = useState(false);

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


  // Add taks
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newTask = {id, ...task};
    setTasks([...tasks, newTask])
  }


  // Delete Task ----> PROP DRILLING
  const delTask = (id) => {
    setTasks(tasks.filter((curTask) => {
      if(curTask.id !== id)
        return curTask;
    }))
  };


  // Toggle Reminder ----> PROP DRILLING
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
      task.id === id ? 
      {...task, reminder: !task.reminder} : task
    ))
  }



  return (
    <div className="container">
      <Header 
        title="Task Tracker" 
        onAdd={() => setShowAddTask(!showAddTask)} 
        showAdd={showAddTask}
      />
      <AddTasks onAdd={addTask} showAddTask={showAddTask} />
      {
        tasks.length > 0 ? 
          <Tasks 
            tasks={tasks} 
            onDelete={delTask} 
            onToggle={toggleReminder}
          /> : 'No Task to display'
      }
      
    </div>
  );
}

export default App;