import React from 'react'
import './Search.css'

export const Search = ({ value, onChange}) => {

  return (
  <div className="search__container">
    <input 
      className="search__input" 
      type="text"
      value={value} 
      placeholder="Search" 
      onChange={onChange}/>
  </div>
    
  )
}


