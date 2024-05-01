import './CardWrap.css'

export const CardWrap = (props) => {
    const {children, image} = props
    return (

   <div className='card-wrap'>
    <img src={image} />
    {children}
    </div>
  )
}
 
  
   