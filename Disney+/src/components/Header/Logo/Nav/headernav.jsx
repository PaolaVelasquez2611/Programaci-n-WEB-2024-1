

import React from 'react';

export function Nav() {
    const url = "https://static-00.iconduck.com/assets.00/star-icon-512x487-b8lwntwc.png"  
  return (

    <ul id="navmenu">
<li>
<img id="navicon" src="./src/assets/user.png" alt="navegation icons" />
<h5>Your Account</h5>
</li>

<li>
<img id="navicon" src="./src/assets/download.png" alt="navegation icons" />
<h5>Your Downloads</h5>
</li>

<li>
<img id="navicon" src="./src/assets/notifications.png" alt="navegation icons" />
<h5>Notifications</h5>
</li>

<li>
<img id="navicon" src="./src/assets/settings.png" alt="navegation icons" />
<h5>Privacy Settings</h5>
</li>

<li>
<img id="navicon" src="./src/assets/logout.png" alt="navegation icons" />
<h4>LogOut</h4>
</li>



    </ul>
     


  );
}