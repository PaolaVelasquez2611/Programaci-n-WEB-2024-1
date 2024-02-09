import React from 'react';

export function Profile(props) {

  const {name} =props
  return (
   <div id="profilediv">
    <p>{name}</p>
      <button id="profbutton" alt="Profile Button"> </button>
      
   </div>
   
    
  );
}
