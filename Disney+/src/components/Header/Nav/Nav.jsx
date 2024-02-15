import React from 'react';
import { AddProfile } from '../Profile/AddProfile';
import { Profile } from '../Profile/profile';

export function Nav({currentMenu}) {
  return (
    currentMenu 
    ? (
      <ul id="navmenu">

    <li>
      <AddProfile></AddProfile>
    </li>

        <li>
          <h5>Edit Profiles</h5>
        </li>

        <li>
          <h5>App Settings</h5>
        </li>

        <li>
          <h5>Account</h5>
        </li>

        <li>
          <h5>Help</h5>
        </li>

        <li>
          <h4>LogOut</h4>
        </li>
      </ul>
    )
   
    : null

  );
}