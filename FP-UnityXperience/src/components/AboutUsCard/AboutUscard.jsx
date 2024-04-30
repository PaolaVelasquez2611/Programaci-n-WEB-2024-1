import { propTypes } from 'react-bootstrap/esm/Image'
import './AboutUsCard.css'

export function AboutUsCard(props) {
    const { text, image } = props;
    return (
        <div className="container-about mx-auto">
            <img className="image-about-us mx-auto" src={image} alt="About Us " />
            <div className="text-container-about mx-auto">
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