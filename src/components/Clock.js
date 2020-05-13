import React from "react"

const Clock = ({secondsLeft}) => {
  const min = Math.floor(secondsLeft / 60.0)
  const sec = Math.floor(secondsLeft % 60.0)
  const withZeros = (number) => ('00' + number).slice(-2)

  return (
    <h3>{withZeros(min)}:{withZeros(sec)}</h3>
  )
}

export default Clock
