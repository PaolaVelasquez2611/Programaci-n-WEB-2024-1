import React from 'react'

export function Box(props) {
    const {url} = props
    return (

        <div id="box">
        <img src={url} id='featured' />
        </div>
            
    )
}