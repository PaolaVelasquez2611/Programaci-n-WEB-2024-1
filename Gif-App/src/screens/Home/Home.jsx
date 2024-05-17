import { useState } from "react";
import { Cards, Form } from "../../components";
import './Home.css'

export const Home = () => {
    const [ searchData, setSearchData]= useState('');

    const handleSearch = (data) => {
      setSearchData(data)
    }

  return (
    <div className="home">
        <Form onSubmit={handleSearch} />
        <Cards searchInput={searchData} />
    </div>
  )
}
