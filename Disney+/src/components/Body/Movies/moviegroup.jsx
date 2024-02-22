import { Movie } from './Movie'

export function MovieGroup({ title, movies, id }) {
    return (
        <>
            <h3>{title}</h3>
            <div className="movie-box-div">
                {
                    movies.map(({ url, id }) => {
                        return <Movie url={url} key={id} />
                    })
                }
            </div>
        </>
    )
}