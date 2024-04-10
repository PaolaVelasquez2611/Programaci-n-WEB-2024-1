import './CatImg.css'
import PropTypes from 'prop-types'

export const CatImg = ({ src }) => {
    return (
        <div className='image-container'>
            <img src={src}></img>
        </div>

    )
}

TodoItem.propTypes = {
    src:PropTypes.string.isRequired,
  };