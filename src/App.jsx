import React from 'react'
import { useState } from 'react'

const App = () => {
  const [task, settask] = useState("");
  const [tasks, usetasks]=useState([]);
  const addTask = ()=>{
    if(task.trim()!=""){
      set tasks([...tasks], settask)
    }
  }
  return (
    <div>
      <h2>To Do List</h2>
      <input type="text" placeholder="Enter the task" value={task} />
      <button>Add</button>
      <ul>

      </ul>
    </div>
  )
}

export default App
