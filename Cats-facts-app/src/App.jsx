import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NewFactBtn } from './components/NewFactBtn'
import { Body } from './components/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Body></Body>
    <NewFactBtn></NewFactBtn>
      
    </>
  )
}

export default App
