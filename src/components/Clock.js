import React from "react"

const Clock = ({secondsLeft}) => {
  const min = Math.floor(secondsLeft / 60.0)
  const sec = Math.floor(secondsLeft % 60.0)
  const withZeros = (number) => ('00' + number).slice(-2)

  return (
    <pre>{withZeros(min)}:{withZeros(sec)}</pre>
  )
}

export default Clock
