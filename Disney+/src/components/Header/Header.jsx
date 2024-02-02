import React from 'react'
import { Category } from './Category/category'
import { Logo } from './Logo/logo'
import { Profile } from './Profile/profile'


export function Header() {
    return (
        <header>
            <div id="header">
            <Logo></Logo>

            <div id="categorymenu">
            <Category text= 'HOME' iconUrl='https://icon-library.com/images/white-home-icon-png/white-home-icon-png-21.jpg'></Category>
            <Category text= "SEARCH" iconUrl="https://www.freeiconspng.com/uploads/search-icon-png-29.png"></Category>
            <Category text= "WATCHLIST" iconUrl="https://icon-library.com/images/white-plus-icon/white-plus-icon-3.jpg"></Category>
            <Category text= "ORIGINALS" iconUrl="https://static-00.iconduck.com/assets.00/star-icon-512x487-b8lwntwc.png"></Category>
            <Category text= "MOVIES" iconUrl="https://flaticons.net/icon.php?slug_category=miscellaneous&slug_icon=film-reel"></Category>
            <Category text= "SERIES" iconUrl="./src/assets/tv.png"></Category>
            </div>

            <Profile name="Paola"></Profile>
            </div>
            
        </header>

    )
}