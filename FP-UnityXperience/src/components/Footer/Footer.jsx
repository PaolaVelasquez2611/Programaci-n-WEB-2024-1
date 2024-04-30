import { NavFooter } from './NavFooter/NavFooter'
import { footerData, footerData2} from '../../data/footerData'
import './Footer.css'

export function Footer (){
    return(
        
        <div className="Container-footer">
            <img className="logo-footer" src="../../src/assets/Logo-footer.png" alt="Logo UnityXperience" />
        <section>
            {footerData.map(({id,title,text})=>{
                return(
                    <section key={id}>
                    <NavFooter  title={title}/>
                    <NavFooter  text={text}/>
                    </section>
                )
            })}
        </section>
        <section>
        {footerData2.map(({id,title,text})=>{
                return(
                    <section key={id} >
                    <NavFooter title={title}/>
                    <NavFooter text={text}/>
                    </section>
                )
            })}
            
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