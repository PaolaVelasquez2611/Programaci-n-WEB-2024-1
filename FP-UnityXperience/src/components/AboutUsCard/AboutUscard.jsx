import { propTypes } from 'react-bootstrap/esm/Image'
import './AboutUsCard.css'

export function AboutUsCard (props){
    const {title,text,image} = props
    return(
        <>
        <h2>{title}</h2>
        <p>{text}</p>
        <img src={image} alt=""/>
        
        </>
    )
}

AboutUsCard.propTypes = {
    title: propTypes.string,
    text: propTypes.string,
    image:propTypes.string
}