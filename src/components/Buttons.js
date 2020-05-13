import React from "react"

const Buttons = ({id, status, handleStart, handleStop, handlePause, handleRemove}) => {
  return (
    <div role="group" aria-label="control">
      <button
        onClick={() => handleStart()}
        type="button"
        className="btn btn-success btn-sm"
        disabled={status === 'started'}
      >Start
      </button>
      <button
        onClick={() => handleStop()}
        type="button"
        className="btn btn-danger btn-sm"
        disabled={status === 'stopped'}
      >Stop
      </button>
      <button
        onClick={() => handlePause()}
        type="button"
        className="btn btn-warning btn-sm"
        disabled={status === 'stopped' || status === 'paused'}
      >Pause
      </button>
      <button
        onClick={() => handleRemove(id)}
        type="button"
        className="btn btn-danger btn-sm"
      >Remove
      </button>
    </div>
  )
}

export default Buttons
