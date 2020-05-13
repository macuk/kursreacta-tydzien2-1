import React from "react"

const ProgressBar = ({prc}) => {
  return (
    <div className="progress">
      <div
        className="progress-bar bg-danger"
        role="progressbar"
        style={{width: `${prc}%`}}
        aria-valuenow={prc}
        aria-valuemin="0"
        aria-valuemax="100">{prc}%
      </div>
    </div>
  )
}

export default ProgressBar
