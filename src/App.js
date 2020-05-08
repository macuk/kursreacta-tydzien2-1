import React, { useState, useEffect } from 'react'
import './App.css'
import Header from "./components/Header"
import CreateForm from "./components/CreateForm"
import Timer from "./components/Timer"

const App = () => {
  return (
    <>
      <Header />
      <hr />
      <CreateForm />
      <hr />
      <Timer task="Example task name" time="1"/>
    </>
  )
}

export default App
