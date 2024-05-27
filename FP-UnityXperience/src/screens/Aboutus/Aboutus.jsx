import './Aboutus.css'
import {AboutUsCard, BrandCard, BrandCards} from "../../components"
import { Background } from '../../components/Background/Background'

// todo: Map it, improve coding practices!!
export const Aboutus = () => {
  return (
  <>
  <Background></Background>
  <div className='title-aboutus'>
  <h1>UnityXperience</h1>
  <h1 className='heading-aboutus'>About Us</h1>
  </div>

  
{/*     {
      aboutUsData.map(( { title, titleColored, text, id, className, image} )=> (
      <span className="titles">
        <h2><span className="title-1">{title}</span></h2>
        <h2><span className="title-2">{titleColored}</span></h2>
      </span>
      <figure className={className}>
       <AboutUsCard text={text}
                    image={image}/>
      </figure>
      ))
    } */}



  <figure className="what-is-container">
  <AboutUsCard  title = "Who are we?" text="UnityXperience isn't your typical design and development company. We’re a 
                      team of passionate freelancers who combine their expertise to create 
                      custom solutionsfor each client. They prioritize understanding your vision
                       and goals before crafting something that perfectly aligns with them. 
                       Their flexibility and adaptability as freelancers ensure high-quality 
                       work delivered on time and within budget. So, if you need anything from 
                       a website to an app or branding, UnityXperience has the skills and 
                       dedication to make it happen."
                image="../../src/assets/logos/logoUnity.png"
   />
   </figure>
   <figure className="our-vision-container">
   <AboutUsCard title = "Our Vision" 
   text="At Unityxperience, we aspire to be recognized as a benchmark in the 
                      industry, being the preferred choice for clients seeking innovative and 
                      high-quality solutions, as well as for freelancers looking to collaborate 
                      on stimulating and rewarding projects. We envision ourselves as a cohesive
                       team that fosters innovation, collaboration, and continuous learning, 
                       constantly driving progress in the field of software development and 
                       digital experience design. Our vision is to continue leading the market, 
                       setting the standard in terms of creativity, technology, and excellence 
                       in customer service."
                image="../../src/assets/aboutUsImage.jpg"
  />
  </figure>
  <figure className="our-mision-container">
   <AboutUsCard title = "Our Mission" 
   text="At Unityxperience, our mission is to lead the software development and 
                      digital experience design industry, being recognized for our innovation, 
                      quality, and commitment to excellence. We strive to be a meeting point
                      where talented freelancers come together to collaborate on projects that 
                      push the boundaries of creativity and technology. We dedicate ourselves
                      to understanding the vision and objectives of our clients to create 
                      customized solutions that align perfectly with them, prioritizing 
                      quality, precision, and attention to detail in every project."
                image="../../src/assets/aboutUsImage2.jpg"/>
  </figure>

  <BrandCards></BrandCards>
  </>
  )
}
