import React, {useState} from "react"

const CreateForm = () => {
  const [task, setTask] = useState('Example task name')
  const [time, setTime] = useState(25)

  return (
    <form>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="task">Task</label>
          <input
            type="text"
            className="form-control"
            id="task"
            value={task}
            onChange={(event) => setTask(event.target.value)}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="time">Time</label>
          <input
            type="number"
            className="form-control"
            id="time"
            value={time}
            onChange={(event) => setTime(event.target.value)}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Add</button>
    </form>
  )
}

export default CreateForm
