import React from 'react'
import { Movie } from './movie'


export function Movies(props) {
    const {title, url, url2} = props
    return (
<>
        <h3>{title}</h3>
        
        <div id="movieboxgroup">

        <Movie url={url} />
        <Movie url={url2} />
        <Movie url={url} />
        <Movie url={url} />
        <Movie url={url} />
        <Movie url={url} />
        <Movie url={url} />
        <Movie url={url} />
        <Movie url={url} />
        <Movie url={url} />
        
        </div>
        
        </>
       
            
    )
}