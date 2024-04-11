import './NewFactBtn.css'
import PropTypes from 'prop-types'

export const NewFactBtn = ({onclick}) => {
    return (
        <button className='button-fact' role="button">
            <label>Give Me Another One</label>
        </button>

    )
}
/* 
NewFactBtn.propTypes = {
    onclick:PropTypes.func.isRequired,
  }; */