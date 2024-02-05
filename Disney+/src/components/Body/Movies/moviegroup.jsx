import React from 'react'
import { Movie } from './movie'


export function Movies(props) {
    const {title, url, url2, url3, url4, url5,url6, url7, url8, url9, url10} = props
    return (
<>
        <h3>{title}</h3>
        
        <div id="movieboxgroup">

        <Movie url={url} />
        <Movie url={url2} />
        <Movie url={url3} />
        <Movie url={url4} />
        <Movie url={url5} />
        <Movie url={url6} />
        <Movie url={url7} />
        <Movie url={url8} />
        <Movie url={url9} />
        <Movie url={url10} />
        
        </div>
        
        </>
       
            
    )
}