import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './App.css'
import Header from "./components/Header"
import CreateForm from "./components/CreateForm"
import Timer from "./components/Timer"

const App = () => {
  const [tasks, setTasks] = useState([
    { id: uuidv4(), name: 'This is first task', time: 10 },
    { id: uuidv4(), name: 'This is second task', time: 15 }
  ])

  const handleAdd = () => {
    const id = uuidv4()
    const newTask = { id, name: `test - ${id}`, time: 20 }
    setTasks([...tasks, newTask])
  }

  const handleRemove = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <>
      <Header />
      <hr />
      <CreateForm />
      <hr />
      {tasks.map(task =>
        <Timer key={task.id} id={task.id} task={task.name} time={task.time} handleRemove={handleRemove} />
      )}
      <button onClick={handleAdd}>ADD</button>
    </>
  )
}

export default App
