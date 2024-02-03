

import React from 'react'

export function Featured(props) {
    const {featuredurl} = props
    return (
             <li><img src={featuredurl} id='featured' /> </li>
    )
}