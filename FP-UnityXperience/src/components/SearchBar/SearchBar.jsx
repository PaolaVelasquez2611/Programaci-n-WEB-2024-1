import React from 'react'
import './SearchBar.css'

export const SearchBar = ({ value, placeholder, onChange}) => {

  return (
  <div className="search__container">
    <input 
      className="search__input" 
      type="text"
      value={value} 
      placeholder={placeholder} 
      onChange={onChange}/>
  </div>
    
  )
}
