import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { Search } from './components/Search/Search'
import { Form } from './components/Form/Form'
import { AppRouter } from './router/AppRouter'
import { Home } from './screens'
import { Header } from './components'

function App() {

  return (
    <>
      <AppRouter />
    </>
  )
}

export default App
