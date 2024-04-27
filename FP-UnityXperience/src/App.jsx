import { useState } from 'react'
import './App.css'
import { Button } from './components/Button/Button'
import { Input } from './components/Input/Input'
import { Landing } from './screens/Landing/Landing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Landing/>
      
    </>
  )
}

export default App
