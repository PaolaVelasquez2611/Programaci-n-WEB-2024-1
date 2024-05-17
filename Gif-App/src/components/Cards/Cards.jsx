import React, { useEffect, useState } from 'react'
import './Cards.css'
import { fetchGif } from '../../services/fetchGif'
import { Loader } from '../Loader/Loader'
import { Error } from '../Error/Error'
import { Card } from '../Card/Card'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Cards = ({ searchInput }) => {

    const notifyAdd = () => {
      toast.success('You just saved it! 😁 ', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
  }
    const notifyRemove = () => {
      toast.success('Remove from your favorites! 👀 ', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
  }

  const [gif, setGif] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [favorites, setFavorites] = useState([])
  const [totalResults, setTotalResults] = useState(0);

  const fetchData = async(searchInput) => {
    try {
      setLoading(true)
      const res = await fetchGif(searchInput);
      setGif(res.data)
      setTotalResults(res.data.length);
    } catch (error) {
      setError(error)
    }finally{
      setLoading(false)
    }
  }

  const addFavorites = (id, title, image) => {
    console.log(`${id} gif added to favorites`)
    const newFavorite = { id, title, image}
    const modifiedFavorites = [...favorites, newFavorite];
    window.localStorage.setItem('favorites', JSON.stringify(modifiedFavorites));
    setFavorites(modifiedFavorites);
    notifyAdd();
  }
  
  const removeFavorites = (id) => {
    console.log(`${id} gif removed from favorites`)
    const modifiedFavorites = favorites.filter(favorite => favorite.id !== id);
    window.localStorage.setItem('favorites', JSON.stringify(modifiedFavorites));
    setFavorites(modifiedFavorites);
    notifyRemove();
  }

  const isFavoriteGif = (id) => {
    return favorites.find(favorite => favorite.id === id) !== undefined;
  };

  const handleSaveClick = (id, title, imageUrl) => {
    if (isFavoriteGif(id)) {
      removeFavorites(id);
    } else {
      addFavorites(id, title, imageUrl);
    }
  };

  useEffect(() => {
    const storedFavorites = JSON.parse(window.localStorage.getItem('favorites')) || []
    setFavorites(storedFavorites)
  }, [])

  useEffect(() => {
    fetchData(searchInput)
  }, [searchInput])


  if (error) {
    return <Error/>;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <>
    <span className='results-span'>Total Results: {totalResults}</span>
    <div className='gif-grid'>
      {
        gif.map(({ id, images, title }) => {
          const isCardFavorite = isFavoriteGif(id);
          return(
            <Card
            key={id}
            id={id}
            images={images.fixed_width_small.url}
            title={title}
            isFavorite={isCardFavorite}
            handleSaveClick={handleSaveClick} />
          )
        })
      }
    </div>
    <ToastContainer />
    </>
  )
}


