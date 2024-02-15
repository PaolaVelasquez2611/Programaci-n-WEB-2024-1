import React from 'react'


export function Category(props) {
    const {text,iconUrl} = props
    return (
        <div className='category'>
             <img src={iconUrl} id='profile' />
            <p>{text}</p>
        </div>

    )
}