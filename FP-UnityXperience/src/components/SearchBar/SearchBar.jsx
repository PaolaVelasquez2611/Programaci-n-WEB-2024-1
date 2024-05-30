import React, { useState } from 'react';
import './SearchBar.css';

export const SearchBar = ({ value, placeholder, onChange, onFilterChange }) => {
  const [showFilters, setShowFilters] = useState(false);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleFilterChange = (e) => {
    onFilterChange(e.target.id);
  };

  return (
    <section className="search__container">
      <div>
        <input 
          className="search__input" 
          type="text"
          value={value} 
          placeholder={placeholder} 
          onChange={onChange}
        />
        <button className='button-filters' onClick={toggleFilters}>
          <img src="/assets/filter.png" alt="Filter"/>
        </button>
      </div>
      {showFilters && (
        <div className="filters">
          <div className="filters-div">
            <input
              className="filter"
              type="radio"
              id="All"
              name="filter"
              onChange={handleFilterChange}
            />
            <label htmlFor="All">All</label>
          </div>
          <div className="filters-div">
            <input
              className="filter"
              type="radio"
              id="UI"
              name="filter"
              onChange={handleFilterChange}
            />
            <label htmlFor="UI">UI</label>
          </div>
          <div className="filters-div">
            <input
              className="filter"
              type="radio"
              id="UX"
              name="filter"
              onChange={handleFilterChange}
            />
            <label htmlFor="UX">UX</label>
          </div>
          <div className="filters-div">
            <input
              className="filter"
              type="radio"
              id="Dev"
              name="filter"
              onChange={handleFilterChange}
            />
            <label htmlFor="Dev">Dev</label>
          </div>
        </div>
      )}
    </section>
  );
}