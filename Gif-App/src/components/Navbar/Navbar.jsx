import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='nav-container'>
       <div className='home-tab'> 
       <Link to={"/"}>
       <p> Home</p> 
       </Link> 
       </div>
        <div className='fav-tab'> 
       <Link to={"/favorites"}>
        <p> Favorites</p> 
       </Link>
        </div>
    </div>
  )
}
