import React from 'react';
import './App.css';

const CreateForm = () => {
  return (
    <form>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="task">Task</label>
          <input type="text" className="form-control" id="task" />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="time">Time</label>
          <input type="text" className="form-control" id="time" />
        </div>
      </div>
      <button type="submit" className="btn btn-outline-primary">Add</button>
    </form>
  )
}

const TaskName = () => {
  return (
    <h2>Task name</h2>
  )
}

const Timer = () => {
  return (
    <pre>15:00</pre>
  )
}

const ProgressBar = () => {
  return (
    <div className="progress">
      <div className="progress-bar"
           role="progressbar"
           style={{ width: "25%" }}
           aria-valuenow="25"
           aria-valuemin="0"
           aria-valuemax="100">25%</div>
    </div>
  )
}

const Buttons = () => {
  return (
    <div className="btn-group" role="group" aria-label="control">
      <button type="button" className="btn btn-outline-success">Start</button>
      <button type="button" className="btn btn-outline-danger" disabled>Stop</button>
      <button type="button" className="btn btn-outline-warning" disabled>Pause</button>
    </div>
  )
}

const Pauses = () => {
  return (
    <div className="alert alert-info">Number of pauses: 0</div>
  )
}

const App = () => {
  return (
    <>
      <h1>🍅 Pomodoro Timer</h1>
      <CreateForm />
      <hr />
      <TaskName />
      <hr />
      <Timer />
      <hr />
      <ProgressBar />
      <hr />
      <Buttons />
      <hr />
      <Pauses />
    </>
  );
}

export default App;
