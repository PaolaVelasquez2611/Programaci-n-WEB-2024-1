import { useEffect, useState } from "react"
import { Card } from "../../components";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Favorites = () => {

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

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storageFavorites = JSON.parse(window.localStorage.getItem('favorites') || []);
    setFavorites(storageFavorites);
  }, [])

  const addFavorites = (id, title, image) => {
    console.log(`${id} gif added to favorites`)
    const newFavorite = { id, title, image}
    const modifiedFavorites = [...favorites, newFavorite];
    window.localStorage.setItem('favorites', JSON.stringify(modifiedFavorites));
    setFavorites(modifiedFavorites);
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

  return (
    <>
    <div className="gif-grid">
      {favorites.map(({ id, images, title }) => {
        const isCardFavorite = isFavoriteGif(id);
        return(
          <Card
          key={id}
          id={id}
          images={images}
          title={title}
          isFavorite={isCardFavorite}
          handleSaveClick={handleSaveClick} />
        )
      })}
    </div>
    <ToastContainer />
    </>
  );
}
