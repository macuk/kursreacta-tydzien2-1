import React from 'react';
import './App.css';

const Form = () => {
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
      <button type="submit" className="btn btn-primary">Add</button>
    </form>
  )
}

const App = () => {
  return (
    <>
      <h1>🍅 Pomodoro Timer</h1>
      <Form />
    </>
  );
}

export default App;
