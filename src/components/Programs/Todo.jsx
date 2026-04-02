import React, { useState } from 'react'

const Todo = () => {
    const [tasks, setTasks] = useState([])
    const [input, setInput] = useState("")
    const addTask = () => {
        if(input.trim() === "") return; //prevent empty note

        setTasks([...tasks, input]); //add new tasks
        setInput("") //clear input
    }
  return (
    <div>
        <input
        type="text"
        placeholder="Enter task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    <button onClick={addTask}>Add Task</button>
    <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>

  )
}

export default Todo