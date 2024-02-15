import React from 'react';

export function Profile(props) {

  const {
    name,
    onClick
  } = props

  return (
   <div id="profilediv">
    <p>{name}</p>
      <button id="profbutton" alt="Profile Button" onClick={onClick}> </button>
   </div> 
  );
}
