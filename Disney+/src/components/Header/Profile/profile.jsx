import React from 'react';

export function Profile(props) {

  const {
    name,
    onClick
  } = props

  return (
   <div className='profile-div'>
    <p>{name}</p>
      <button id="profile-button" alt="Profile Button" onClick={onClick}> </button>
   </div> 
  );
}
