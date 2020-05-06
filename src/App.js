import React, { useState, useEffect } from 'react';
import './App.css';

const Header = () => {
  return (
    <h1>
      <span role="img"
            aria-label="tomato"
            aria-labelledby="header">🍅 </span>
      Pomodoro Timer
    </h1>
  )
}

const CreateForm = () => {
  const [task, setTask] = useState('Example task name')
  const [time, setTime] = useState(25)

  return (
    <form>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="task">Task</label>
          <input type="text"
                 className="form-control"
                 id="task"
                 value={task}
                 onChange={(event) => setTask(event.target.value)}/>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="time">Time</label>
          <input type="number"
                 className="form-control"
                 id="time"
                 value={time}
                 onChange={(event) => setTime(event.target.value)}/>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Add</button>
    </form>
  )
}

const TaskName = ({name}) => {
  return (
    <h2>{name}</h2>
  )
}

const Clock = ({secondsLeft}) => {
  const min = Math.floor(secondsLeft / 60.0)
  const sec = Math.floor(secondsLeft % 60.0)
  const withZeros = (number) => ('00' + number).slice(-2)

  return (
    <pre>{withZeros(min)}:{withZeros(sec)}</pre>
  )
}

const ProgressBar = ({prc}) => {
  return (
    <div className="progress">
      <div className="progress-bar bg-danger"
           role="progressbar"
           style={{width: `${prc}%`}}
           aria-valuenow={prc}
           aria-valuemin="0"
           aria-valuemax="100">{prc}%
      </div>
    </div>
  )
}

const Buttons = ({status, onStart, onStop, onPause}) => {
  return (
    <div className="btn-group" role="group" aria-label="control">
      <button onClick={() => onStart()}
              type="button"
              className="btn btn-success"
              disabled={status === 'started'}>
        Start
      </button>
      <button onClick={() => onStop()}
              type="button"
              className="btn btn-danger"
              disabled={status === 'stopped'}>
        Stop
      </button>
      <button onClick={() => onPause()}
              type="button"
              className="btn btn-warning"
              disabled={status === 'stopped' || status === 'paused'}>
        Pause
      </button>
    </div>
  )
}

const Pauses = ({pauses}) => {
  return (
    <div className="alert alert-info">Number of pauses: {pauses}</div>
  )
}

const Timer = ({task, time}) => {
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
      <TaskName name={task} />
      <hr />
      <Clock secondsLeft={secondsLeft} />
      <hr />
      <ProgressBar prc={prc} />
      <hr />
      <Buttons status={status}
               onStart={handleStart}
               onStop={handleStop}
               onPause={handlePause} />
      <hr />
      <Pauses pauses={pauses} />
    </>
  )
}

const App = () => {
  return (
    <>
      <Header />
      <hr />
      <CreateForm />
      <hr />
      <Timer task="Example task name" time="1"/>
    </>
  );
}

export default App;
