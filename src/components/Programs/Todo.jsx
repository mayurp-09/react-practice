import React, { useState } from 'react'

const Todo = () => {
    const [tasks, setTasks] = useState([])
    const [input, setInput] = useState("")
    const addTask = () => {
        if(input.trim() === "") return; //prevent empty note

        setTasks([...tasks, input]); //add new tasks
        setInput("") //clear input
    }

    const deleteTask = (index) => {
      const updatTask = tasks.filter((_, i) => i !== index);
      setTasks(updatTask);
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
          <li key={index}>{task}
          <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>

  )
}

export default Todo