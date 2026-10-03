import React from "react";
import { useState } from "react";

const App = () => {
  const [task, settask] = useState("");
  const [tasks, settasks] = useState([]);
  const addTask = () => {
    if (task.trim() != "") {
      settasks([...tasks, task]);
      settask("");
    }
  };
  return (
    <div className="bg-blue-300 min-h-full flex justify-col align-center">
      <h2>To Do List</h2>
      <input type="text" placeholder="Enter the task" value={task} />
      <button>Add</button>
      <ul></ul>
    </div>
  );
};

export default App;
