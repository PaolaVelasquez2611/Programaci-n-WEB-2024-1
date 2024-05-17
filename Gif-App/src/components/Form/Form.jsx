import { Search } from "../Search/Search"
import PropTypes from 'prop-types'
import debounce from 'just-debounce-it'
import { useCallback, useState } from "react"
import './Form.css'

export const Form = ({ onSubmit }) => {

    const [searchInput, setSearchInput] = useState('');

    const debounceIt = useCallback(
        debounce((e) => {
            onSubmit(e)
        }, 500),
        [onSubmit]
    )
    
    const handleOnChange = (e) => {
        setSearchInput(e.target.value);
        debounceIt(e.target.value);
        console.log(e.target.value);
      };

    const handleSearch = (e) => {
        e.preventDefault();
        onSubmit(searchInput)
    }

  return (
    <form onSubmit={handleSearch}>
        <Search
            value={searchInput}
            onChange={handleOnChange}
        />
    </form>
  )
}
