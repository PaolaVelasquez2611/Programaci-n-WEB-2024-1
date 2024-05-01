import './CardWrap.css'

export const CardWrap = (props) => {
    const {children, image} = props
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
 
  
   