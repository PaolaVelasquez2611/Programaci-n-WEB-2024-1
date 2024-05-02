import { NavFooter } from './NavFooter/NavFooter'
import { footerData, footerData2} from '../../data/footerData'
import './Footer.css'
import { Link } from 'react-router-dom'

export function Footer (){
    return(
        <div className="Container-footer">
            <img className="logo-footer" src="../../src/assets/Logo-footer.png" alt="Logo UnityXperience" />
        <section>
            {footerData.map(({id,title,text, route})=>{
                return(
                    <section key={id}>
                        <NavFooter  title={title}/>
                    <Link to={route}>
                    <NavFooter  text={text}/>
                    </Link>
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
            <Link to={"/adminlogin"}>
                <NavFooter title2="Administrator Panel"/>
            </Link>
        </section>
        </div>
    )
}