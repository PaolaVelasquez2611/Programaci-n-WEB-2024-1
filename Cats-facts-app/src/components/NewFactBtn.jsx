import './NewFactBtn.css'
import PropTypes from 'prop-types'

export const NewFactBtn = ({onclick}) => {
    return (
        <button>
            <label>New Fact</label>
        </button>

    )
}
TodoItem.propTypes = {
    onclick:PropTypes.func.isRequired,
  };