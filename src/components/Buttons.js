import React from "react"

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

export default Buttons
