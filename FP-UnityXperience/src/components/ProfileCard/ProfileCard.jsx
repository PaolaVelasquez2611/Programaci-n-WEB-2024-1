import './ProfileCard.css'

export function ProfileCard({ text, imagen, title }) {
    return (
        <section className='card-profile mx-auto'>
            <div className="profile-card">
                <img className="img-profile" src={imagen} alt="Profile Image" />
            </div>
            <div className='card-info'>
                <h2 className='name'>{title}</h2>
                <p className='descript'>{text}</p>

                <section className='buttons-social-card'>
                    <button className='social-btn-card'>
                        <img src="../../src/assets/github.png" alt="" />
                    </button>
                    <button className='social-btn-card'>
                        <img src="../../src/assets/instagram.png" alt="" />
                    </button>
                    <button className='social-btn-card'>
                        <img src="../../src/assets/behance.png" alt="" />
                    </button>
                    <button className='social-btn-card'>
                        <img src="../../src/assets/linkedin.png" alt="" />
                    </button>
                </section>
            </div>
        </section>
    )
}