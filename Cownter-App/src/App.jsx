import { useState } from 'react'
import './App.css'
import { Body, Footer, Header } from './components/index';

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
    <Header></Header>
    <Body></Body>
    <Footer></Footer>
    </>
  )
}

export default App
