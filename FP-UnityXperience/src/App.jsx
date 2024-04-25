import { useState } from 'react'
import './App.css'
import { Button } from './components/Button/Button'
import { Input } from './components/Input/Input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello we Are UnityXperience</h1>
      <Button></Button>
      <Input></Input>
    </>
  )
}

export default App
