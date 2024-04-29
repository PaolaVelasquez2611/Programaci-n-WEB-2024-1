import { NavFooter } from './NavFooter/NavFooter'
import './Footer.css'

export function Footer (){
    return(
        
        <div className="Container-footer">
            <img className="logo-footer" src="../../src/assets/Logo-footer.png" alt="Logo UnityXperience" />
        <section>
            <NavFooter title="Navigation"/>
            <NavFooter text="Home"/>
            <NavFooter text="Projects"/>
            <NavFooter text="Services"/>
            <NavFooter text="About Us"/>
            <NavFooter text="Contact"/>
        </section>
        <section>
            <NavFooter title="Contact Us"/>
            <NavFooter description="318-496-4527"/>
            <NavFooter description="@UnityXperience "/>
            <NavFooter description="UnityXperience@gmail.com"/>
        <section className='buttons-social'>
            <button className='social-btn'>
                <img src="../../src/assets/github.png" 
                     alt="" />
            </button>
            <button className='social-btn'>
                <img src="../../src/assets/instagram.png" 
                     alt="" />
            </button>
            <button className='social-btn'>
                <img src="../../src/assets/behance.png" 
                     alt="" />
            </button>
            <button className='social-btn'>
                <img src="../../src/assets/linkedin.png" 
                     alt="" />
            </button>
        </section>
        </section>
        <section>
            <NavFooter title2="Administrator Panel"/>
        </section>

        
       

        </div>
        
    )
}