import { propTypes } from 'react-bootstrap/esm/Image'
import './AboutUsCard.css'

export function AboutUsCard(props) {
    const { title, text, image } = props;
    return (
        <div className="container-about">
            <img className="image-about-us" src={image} alt="About Us" />
            <div className="text-container-about">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
}
AboutUsCard.propTypes = {
    title: propTypes.string,
    text: propTypes.string,
    image:propTypes.string
}