import React from 'react'

export function Studio(props) {
    const {id,url} = props
    return (

        <div id={id}>
        <img src={url} id='featured' />
        </div>
            
    )

}