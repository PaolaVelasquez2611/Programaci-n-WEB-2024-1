import { Header,Footer,AboutUsCard, BrandCard} from "../../components"


export const Aboutus = () => {
  return (
  <>
  <Header/>
  <h1 className="text-center mt-8 mb-20">UnityXperience</h1>
  <span className="titles">
    <h2><span className="title-1">what</span></h2>
    <h2><span className="title-2">Is?</span></h2>
  </span>
  <section className="what-is-container">
  <AboutUsCard  text="UnityXperience isn't your typical design and development company. We’re a 
                      team of passionate freelancers who combine their expertise to create 
                      custom solutionsfor each client. They prioritize understanding your vision
                       and goals before crafting something that perfectly aligns with them. 
                       Their flexibility and adaptability as freelancers ensure high-quality 
                       work delivered on time and within budget. So, if you need anything from 
                       a website to an app or branding, UnityXperience has the skills and 
                       dedication to make it happen."
                image="../../src/assets/logos/logoUnity.png"
   />
   </section>
   <span className="titles">
    <h2><span className="title-1">Our</span></h2>
    <h2><span className="title-2">Vision</span></h2>
  </span>
   <section className="our-vision-container">
   <AboutUsCard text="At Unityxperience, we aspire to be recognized as a benchmark in the 
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
  </section>
  <span className="titles">
    <h2><span className="title-1">Our</span></h2>
    <h2><span className="title-2">Mision</span></h2>
  </span>
  <section className="our-mision-container">
   <AboutUsCard text="At Unityxperience, our mission is to lead the software development and 
                      digital experience design industry, being recognized for our innovation, 
                      quality, and commitment to excellence. We strive to be a meeting point
                      where talented freelancers come together to collaborate on projects that 
                      push the boundaries of creativity and technology. We dedicate ourselves
                      to understanding the vision and objectives of our clients to create 
                      customized solutions that align perfectly with them, prioritizing 
                      quality, precision, and attention to detail in every project."
                image="../../src/assets/aboutUsImage2.jpg"/>
  </section>

  <span className="titles-Values">
    <h2><span className="title-1">Our</span></h2>
    <h2><span className="title-2">Values</span></h2>
  </span>
  <section className="card-seccion flex justify-center items-center h-screen">
  <BrandCard icon="../src/assets/icons/lightBulbIcon.png" title="Innovation" description="We continuously seek new ways to tackle 
                                                     challenges and devise creative solutions 
                                                     that drive progress."
  />
  <BrandCard icon="../src/assets/icons/medalIcon.png" title="Quality" description="We are committed to delivering exceptional work 
                                                  on every project, focusing on precision, 
                                                  attention to detail, and excellence."
  />
  <BrandCard icon="../src/assets/icons/userIcon.png" title="Collaboration" description="We believe in the power of teamwork and
                                                        foster an environment where all members 
                                                        can contribute and learn."
   />
            
  </section>

  <Footer/>
  </>
  )
}
