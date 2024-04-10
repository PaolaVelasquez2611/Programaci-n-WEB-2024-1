import './CatSentence.css'
import PropTypes from 'prop-types'

export const CatSentence = ({text}) => {
    return (
        <body>
            <p>{text}</p>
        </body>

    )
}

TodoItem.propTypes = {
    text:PropTypes.string.isRequired,
  };