import React, {useState} from "react"

const CreateForm = ({handleCreate}) => {
  const [name, setName] = useState('')
  const [time, setTime] = useState(30)

  const handleSubmit = (event) => {
    event.preventDefault()
    handleCreate({name, time})
    setName('')
    setTime(30)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="name">Task name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="time">Task time</label>
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
