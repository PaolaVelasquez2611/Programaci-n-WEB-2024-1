import './AboutUsCard.css'

export function AboutUsCard({ text, image }) {
    return (
        <div className="container-about mx-auto">
            <img className="image-about-us mx-auto" src={image} alt="About Us " />
            <div className="text-container-about mx-auto">
                <p>{text}</p>
            </div>
        </div>
    );
}

