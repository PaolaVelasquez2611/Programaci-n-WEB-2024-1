import './NewFactBtn.css'
import PropTypes from 'prop-types'

export const NewFactBtn = ({onClick, text}) => {
    
    const handleOnClick = () => {
        onClick();
        console.log('clicked looking for a new fact!')
    }

    return (
        <button 
        className='button-fact' 
        role="button" 
        onClick={handleOnClick}>
            <label>{text}</label>
        </button>

    )
}

NewFactBtn.propTypes = {
    onClick:PropTypes.func.isRequired,
    text:PropTypes.string.isRequired
  };