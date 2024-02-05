import React from 'react'

export function Studio(props) {
    const {url} = props
    return (

        <div id="box">
        <img src={url} id='featured' />
        </div>
            
    )
}