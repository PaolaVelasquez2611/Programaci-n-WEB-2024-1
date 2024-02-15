import React from 'react'

export function Movie(props) {
    const {url} = props
    return (

        <div className="movie-box">
        <img src={url} />
        </div>
            
    )
}