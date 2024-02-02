import React from 'react'


export function Category(props) {
    const {text,iconUrl} = props
    return (
        <div id="category">
             <img src={iconUrl} id='profile' />
            <p>{text}</p>
        </div>

    )
}