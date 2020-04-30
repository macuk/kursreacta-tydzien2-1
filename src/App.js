import React, { useState } from 'react';
import './App.css';

const Header = () => {
  return (
    <h1>
      <span role="img" aria-label="tomato" aria-labelledby="header">🍅 </span>
      Pomodoro Timer
    </h1>
  )
}

const CreateForm = () => {
  return (
    <form>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="task">Task</label>
          <input type="text" className="form-control" id="task" value="Example task name"/>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="time">Time</label>
          <input type="number" className="form-control" id="time" value="25"/>
        </div>
      </div>
      <button type="submit" className="btn btn-outline-primary">Add</button>
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
           style={{ width: `${prc}%` }}
           aria-valuenow={prc}
           aria-valuemin="0"
           aria-valuemax="100">{prc}%</div>
    </div>
  )
}

const Buttons = ({onStart, onStop, onPause}) => {
  return (
    <div className="btn-group" role="group" aria-label="control">
      <button onClick={() => onStart()} type="button" className="btn btn-outline-success">Start</button>
      <button onClick={() => onStop()} type="button" className="btn btn-outline-danger" disabled>Stop</button>
      <button onClick={() => onPause()} type="button" className="btn btn-outline-warning" disabled>Pause</button>
    </div>
  )
}

const Pauses = ({pauses}) => {
  return (
    <div className="alert alert-info">Number of pauses: {pauses}</div>
  )
}

const Timer = ({task, time}) => {
  const [pauses, setPauses] = useState(0)
  const [secondsLeft, setSecondsLeft] = useState(time * 60)

  const handleStart = () => {
    console.log('Start')
  }

  const handleStop = () => {
    console.log('Stop')
  }

  const handlePause = () => {
    console.log('Pause')
  }

  return (
    <>
      <TaskName name={task} />
      <hr />
      <Clock secondsLeft={secondsLeft} />
      <hr />
      <ProgressBar prc="30" />
      <hr />
      <Buttons onStart={handleStart} onStop={handleStop} onPause={handlePause} />
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
      <Timer task="Example task name" time="25"/>
    </>
  );
}

export default App;
