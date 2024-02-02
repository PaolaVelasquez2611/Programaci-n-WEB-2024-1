import React from 'react';

export function Profile(props) {
  const imageUrl = 'https://emi9d8rzue7.exactdn.com/wp-content/uploads/2021/12/Encanto-Avatar.png?strip=all&lossy=1&resize=800%2C800&ssl=1';
  const {name} =props
  return (
   <div id="profilediv">
    <p>{name}</p>
      <img src={imageUrl} alt="profilelogo" />
   </div>
   
    
  );
}
