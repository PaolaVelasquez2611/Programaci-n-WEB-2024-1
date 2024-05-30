import { NavFooter } from './NavFooter/NavFooter'
import { footerData, footerData2} from '../../data/footerData'
import './Footer.css'
import { Link } from 'react-router-dom'

export function Footer (){
    return(
        <div className="Container-footer">
            <img className="logo-footer" src="/assets/Logo-footer.png" alt="Logo UnityXperience" />
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
        {footerData2.map(({id,title,text,path})=>{
                return(
                    <section key={id} >
                    <NavFooter title={title}/>
                    <Link to={path}>
                    <NavFooter text={text}/>
                    </Link>
                    </section>
                )
            })}
            
        <section className='buttons-social'>
            <button className='social-btn'>
                <img src="/assets/github.png" 
                     alt="" />
            </button>
            <button className='social-btn'>
                <img src="/assets/instagram.png" 
                     alt="" />
            </button>
            <button className='social-btn'>
                <img src="/assets/behance.png" 
                     alt="" />
            </button>
            <button className='social-btn'>
                <img src="/assets/linkedin.png" 
                     alt="" />
            </button>
        </section>
        </section>
        <section className='admin-button-tologin'>
            <Link to={"/adminlogin"}>
                <NavFooter title2="I'm an Administrator"/>
            </Link>
        </section>
        </div>
    )
}