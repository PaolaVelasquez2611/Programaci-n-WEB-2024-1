import './CardWrap.css'

export const CardWrap = ({ children, image }) => {
    return (
    <div className='card-wrap'>
      <img src={image} />
      {children}
    </div>
  )
}
 
  
   