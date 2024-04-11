import './NewFactBtn.css'
import PropTypes from 'prop-types'

export const NewFactBtn = ({onClick}) => {
    
    const handleOnClick = () => {
        onClick();
        console.log('clicked looking for a new fact!')
    }

    return (
        <button onClick={handleOnClick}>
            <label>New Fact</label>
        </button>

    )
}

NewFactBtn.propTypes = {
    onClick:PropTypes.func.isRequired,
  };