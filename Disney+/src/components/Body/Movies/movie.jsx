import React from 'react'

export function Movie(props) {
    const {url} = props
    return (

        <div id="moviebox">
        <img src={url} />
        </div>
            
    )
}