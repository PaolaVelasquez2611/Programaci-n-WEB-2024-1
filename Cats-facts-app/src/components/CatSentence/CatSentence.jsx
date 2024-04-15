import './CatSentence.css'
import PropTypes from 'prop-types'

export const CatSentence = ({text}) => {
    return (
            <p>{text}</p>
    )
}

CatSentence.propTypes = {
    text:PropTypes.string,
  };