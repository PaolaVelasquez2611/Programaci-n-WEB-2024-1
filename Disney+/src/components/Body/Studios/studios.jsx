import React from 'react'
import { Studio } from './studio'


export function Studios() {
    return (

        <div id="studiogroup">
                
                    <Studio id="disney" url='https://www.edigitalagency.com.au/wp-content/uploads/Disney-logo-white-png.png'></Studio>
                    <Studio id="pixar" url='./src/assets/pixar.png'></Studio>
                    <Studio id="marvel" url='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png'></Studio>
                    <Studio id="starwars" url='./src/assets/starwars.png'></Studio>
                    <Studio id="national" url='./src/assets/national.png'></Studio>
      
        </div>

    )
}