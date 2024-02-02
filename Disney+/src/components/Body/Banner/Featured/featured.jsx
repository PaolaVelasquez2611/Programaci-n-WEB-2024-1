

import React from 'react'

export function Featured(props) {
    const {featuredurl} = props
    return (
             <img src={featuredurl} id='featured' />
    )
}