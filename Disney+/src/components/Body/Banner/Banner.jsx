import { featured } from '../../../data/featured';
import { Featured } from "./Featured/Featured";

export function Banner() {
    const featured_url = featured
    console.log (featured_url)
    return (

        <div className="banner">
            <div className="slider">
                <ul>
                    {featured_url.map (({id,url})=>(
                        <Featured featuredurl={url} key={id}/>
                    ))}   
                </ul>
            </div>
        </div>
    )
}

