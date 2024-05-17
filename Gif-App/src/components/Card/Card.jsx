import './Card.css'

export const Card = ({ id, images, title, isFavorite, handleSaveClick }) => {

  const handleClick = () => {
    handleSaveClick(id, title, images);
  }

  return (
    <figure className='div-card' key={id}>
                <img src={images} />
                <p>{title}</p>
                <button 
                  className='button-add'
                  onClick={handleClick}>
                  {isFavorite ? 'Remove favorite' : 'Add favorite'} 
                </button>
    </figure>
  )
}
