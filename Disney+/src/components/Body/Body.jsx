import React from 'react'
import { movies } from '../../Data/movies'
import { movies2 } from '../../Data/movies2'
import { movies3 } from '../../Data/movies3'
import { Banner } from './Banner/Banner'
import { MovieGroup} from './Movies/MovieGroup'
import { Studios } from './Studios/Studios'


const moviedata = movies
const moviedata2 = movies2
const moviedata3 = movies3


export function Body() {

    
    return (
        <main id="main">
            <Banner></Banner>
            <Studios></Studios>
            <MovieGroup title="Action and Adventure"
                movies={moviedata}

            >

            </MovieGroup>

            <MovieGroup title="New to Disney+ "
                movies={moviedata2}

            ></MovieGroup>

            <MovieGroup title="Recommended for you"
                movies={moviedata3}

            > </MovieGroup>
        </main>
    )
}