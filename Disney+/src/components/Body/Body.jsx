import React from 'react'
import { Banner } from './Banner/Banner'
import { Movies } from './Movies/moviegroup'
import { Studios } from './Studios/studios'


export function Body() {
    return (
        <main id="main">
            <Banner></Banner>
            <Studios></Studios>
            <Movies title ="Action and Adventure" url="https://cdn.milenio.com/uploads/media/2021/04/27/percy-jackson-interpretado-logan-lerman.png" url2="https://www.comingsoon.net/wp-content/uploads/sites/3/2023/06/The-Little-Mermaid.jpeg"></Movies>
        </main>
    )
}