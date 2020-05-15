import React from "react"

const ProgressBar = ({time, secondsLeft}) => {
  const percent = 100 - Math.floor((secondsLeft / (time * 60)) * 100)

  return (
    <div className="progress">
      <div
        className="progress-bar bg-danger"
        role="progressbar"
        style={{width: `${percent}%`}}
        aria-valuenow={percent}
        aria-valuemin="0"
        aria-valuemax="100">{percent}%
      </div>
    </div>
  )
}

export default ProgressBar
