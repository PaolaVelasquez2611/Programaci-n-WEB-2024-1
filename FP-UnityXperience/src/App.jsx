import { useState } from 'react'
import './App.css'
import { Button } from './components/Button/Button'
import { Input } from './components/Input/Input'
import { Contact } from './screens/Contact/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Contact></Contact>
    </>
  )
}

export default App
