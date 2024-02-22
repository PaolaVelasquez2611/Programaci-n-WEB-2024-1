import { movies } from '../../Data/movies'
import { movies2 } from '../../Data/movies2'
import { movies3 } from '../../Data/movies3'
import { Banner } from './Banner/Banner'
import { MovieGroup } from './Movies/MovieGroup'
import { Studios } from './Studios/Studios'

const movieData = movies
const movieData2 = movies2
const movieData3 = movies3

export function Body() {
    return (
        <main id="main">
            <Banner></Banner>
            <Studios></Studios>
            <MovieGroup title="Action and Adventure"
                movies={movieData}
            >
            </MovieGroup>
            <MovieGroup title="New to Disney+ "
                movies={movieData2}
            ></MovieGroup>
            <MovieGroup title="Recommended for you"
                movies={movieData3}
            > </MovieGroup>
        </main>
    )
}