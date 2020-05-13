import React from "react"

const Buttons = ({id, status, handleStart, handleStop, handlePause, handleRemove}) => {
  return (
    <div className="btn-group" role="group" aria-label="control">
      <button
        onClick={() => handleStart()}
        type="button"
        className="btn btn-success"
        disabled={status === 'started'}
      >Start
      </button>
      <button
        onClick={() => handleStop()}
        type="button"
        className="btn btn-danger"
        disabled={status === 'stopped'}
      >Stop
      </button>
      <button
        onClick={() => handlePause()}
        type="button"
        className="btn btn-warning"
        disabled={status === 'stopped' || status === 'paused'}
      >Pause
      </button>
      <button
        onClick={() => handleRemove(id)}
        type="button"
        className="btn btn-danger"
      >Remove
      </button>
    </div>
  )
}

export default Buttons
