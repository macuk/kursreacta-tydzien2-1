import React, {useEffect, useState} from "react"
import TaskName from "./TaskName"
import Clock from "./Clock"
import ProgressBar from "./ProgressBar"
import Buttons from "./Buttons"
import Pauses from "./Pauses"

const Timer = ({id, task, time, handleRemove}) => {
  const [status, setStatus] = useState('stopped')
  const [pauses, setPauses] = useState(0)
  const [secondsLeft, setSecondsLeft] = useState(time * 60)
  const [prc, setPrc] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (status === 'started' && secondsLeft > 0) {
        setSecondsLeft(secondsLeft - 1)
        setPrc(100 - Math.floor((secondsLeft / (time * 60)) * 100))
      }
    }, 1000)
    return () => clearInterval(timer)
  }, [status, secondsLeft, prc, time])

  const handleStart = () => {
    setStatus('started')
  }

  const handleStop = () => {
    setStatus('stopped')
    setPauses(0)
    setSecondsLeft(time * 60)
    setPrc(0)
  }

  const handlePause = () => {
    setStatus('paused')
    setPauses(pauses + 1)
  }

  return (
    <>
      <TaskName name={task}/>
      <hr/>
      <Clock secondsLeft={secondsLeft}/>
      <hr/>
      <ProgressBar prc={prc}/>
      <hr/>
      <Buttons
        id={id}
        status={status}
        handleStart={handleStart}
        handleStop={handleStop}
        handlePause={handlePause}
        handleRemove={handleRemove}
      />
      <hr/>
      <Pauses pauses={pauses}/>
    </>
  )
}

export default Timer
