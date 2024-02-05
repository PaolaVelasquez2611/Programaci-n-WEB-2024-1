import React from 'react'
import { Studio } from '../Movies/studio'


export function Studios() {
    return (

        <div id="studiogroup">
                
                    <Studio class="disney" url='https://www.edigitalagency.com.au/wp-content/uploads/Disney-logo-white-png.png'></Studio>
                    <Studio class="pixar" url='./src/assets/pixar.png'></Studio>
                    <Studio class="marvel" url='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png'></Studio>
                    <Studio class="starwars" url='./src/assets/starwars.png'></Studio>
                    <Studio class="national" url='./src/assets/national.png'></Studio>
      
        </div>

    )
}