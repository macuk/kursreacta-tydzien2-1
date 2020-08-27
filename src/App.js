import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'
import Header from "./components/Header"
import CreateForm from "./components/CreateForm"
import TimerList from "./components/TimerList"

const App = () => {
  const [tasks, setTasks] = useState([])

  const handleCreate = ({name, time}) => {
    const id = uuidv4()
    const newTask = {id, name, time}
    setTasks([...tasks, newTask])
  }

  const handleRemove = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <>
      <Header/>
      <hr/>
      <CreateForm handleCreate={handleCreate}/>
      <hr/>
      <TimerList
        tasks={tasks}
        handleRemove={handleRemove}
      />
      <button ontouchmove="console.log('ok')">Test button</button>
    </>
  )
}

export default App
