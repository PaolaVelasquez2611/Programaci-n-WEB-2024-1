import './CardWrap.css'

export const CardWrap = ({ children, image }) => {
    return (

   <div className='card-wrap'>
    <div className='image-container'>
    <img src={image} />
    </div>
    <div className='children-container'>
    {children}
    </div>
    </div>
  )
}
 
  
   