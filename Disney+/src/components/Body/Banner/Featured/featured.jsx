export function Featured(props) {
    const {featuredurl} = props
    return (
             <li><img src={featuredurl} className='featured' /> </li>
    )
}