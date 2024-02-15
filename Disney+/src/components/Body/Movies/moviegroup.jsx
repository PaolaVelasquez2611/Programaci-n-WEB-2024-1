import React from 'react'
import { Movie } from './Movie'


export function MovieGroup({title, movies, id}) {
    return (
        <>
            <h3>{title}</h3>
            
            <div className="movie-box-div">
            {
                movies.map((movie)=> {
                    return  <Movie url={movie.url} key={movie.id}/>
                })
            }
            </div>
        
        </>
       
            
    )
}