import React, { useState } from "react";

const App = () => {
  const [task, settask] = useState("");
  const [tasks, settasks] = useState([]);

  const addTask = () => {
    if (task.trim() !== "") {
      settasks([...tasks, task]);
      settask("");
    }
  };

  return (
    <div className="bg-blue-300 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-4">To Do List</h2>
      <input
        type="text"
        placeholder="Enter the task"
        value={task}
        onChange={(e) => settask(e.target.value)}
        className="px-3 py-2 rounded border mb-2"
      />
      <button
        onClick={addTask}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-4"
      >
        Add
      </button>
      <ul>
        {tasks.map((t, i) => (
          <li key={i} className="mb-2">
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
