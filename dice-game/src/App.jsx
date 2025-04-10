import React, { useState } from 'react'
import PlayNow from './Components/PlayNow'
import { StartGame } from './Components/StartGame'

const App = () => {
  const [start,setStart] = useState(false)
  const handleStart = () => {
    console.log("start")
    setStart(!start)
    console.log(start)
  }
  return (  
    <div>{start?<StartGame />:<PlayNow handleStart={handleStart}/>}</div>
    )
}

export default App
