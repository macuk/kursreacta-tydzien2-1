import React from "react"
import Timer from "./Timer"

const TimerList = ({tasks, handleRemove}) => {
  return (
    tasks.map(task =>
      <Timer
        key={task.id}
        id={task.id}
        task={task.name}
        time={task.time}
        handleRemove={handleRemove}
      />
    )
  )
}

export default TimerList
