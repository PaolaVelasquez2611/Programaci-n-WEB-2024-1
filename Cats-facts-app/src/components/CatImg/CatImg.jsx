import './CatImg.css'
import PropTypes from 'prop-types'

export const CatImg = ({ src }) => {
    return (
        <div className='image-container'>
            <img src={src} alt='Image not found'></img>
        </div>

    )
}

CatImg.propTypes = {
    src:PropTypes.string.isRequired,
  }; 