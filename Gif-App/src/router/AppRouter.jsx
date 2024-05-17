import {  Route, Routes } from "react-router-dom"
import { Favorites, Home } from "../screens"
import { Header, Navbar } from "../components"

export const AppRouter = () => {
  return (
    <main>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Favorites" element={<Favorites/>}/>
      </Routes>
    </main>
  )
}