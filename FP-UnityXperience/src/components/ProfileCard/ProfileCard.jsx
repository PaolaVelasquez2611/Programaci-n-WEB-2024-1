import './ProfileCard.css';

export function ProfileCard({ text, imagen, title, socialMedia }) {
    return (
        <section className='card-profile'>
            <div className="profile-card">
                <img className="img-profile" src={imagen} alt="Profile Image" />
            </div>
            <div className='card-info'>
                <h2 className='name'>{title}</h2>
                <p className='descript'>{text}</p>

                <section className='buttons-social-card'>
                    <a className='social-btn-card' href={socialMedia.github} target="_blank" rel="noopener noreferrer">
                        <img src="../../src/assets/github.png" alt="GitHub" />
                    </a>
                    <a className='social-btn-card' href={socialMedia.instagram} target="_blank" rel="noopener noreferrer">
                        <img src="../../src/assets/instagram.png" alt="Instagram" />
                    </a>
                    <a className='social-btn-card' href={socialMedia.behance} target="_blank" rel="noopener noreferrer">
                        <img src="../../src/assets/behance.png" alt="Behance" />
                    </a>
                    <a className='social-btn-card' href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer">
                        <img src="../../src/assets/linkedin.png" alt="LinkedIn" />
                    </a>
                </section>
            </div>
        </section>
    );
}
