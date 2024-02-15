
import { useState } from 'react'
import { Category } from './Category/Category'
import { Logo } from './Logo/Logo'
import { Nav } from './Nav/Nav'
import { Profile } from './Profile/Profile'

export function Header() {

    const [showMenu , setShowMenu] = useState(false)
    const handleShowMenu = () => {
        console.log('works')
        setShowMenu(!showMenu)
    }

    return (
        <header>
        
            <Logo></Logo>

            <div id="categorymenu">
            <Category id="homebutton" text= 'HOME' iconUrl='https://icon-library.com/images/white-home-icon-png/white-home-icon-png-21.jpg'></Category>
            <Category id="homebutton" text= "SEARCH" iconUrl="https://www.freeiconspng.com/uploads/search-icon-png-29.png"></Category>
            <Category id="display1" text= "WATCHLIST" iconUrl="https://icon-library.com/images/white-plus-icon/white-plus-icon-3.jpg"></Category>
            <Category id="display1" text= "ORIGINALS" iconUrl="https://static-00.iconduck.com/assets.00/star-icon-512x487-b8lwntwc.png"></Category>
            <Category id="display1" text= "MOVIES" iconUrl="https://flaticons.net/icon.php?slug_category=miscellaneous&slug_icon=film-reel"></Category>
            <Category id="display1" text= "SERIES" iconUrl="./src/assets/tv.png"></Category>
            </div>

            <Nav currentMenu={showMenu}></Nav>

            <Profile name="Paola" onClick={handleShowMenu}> </Profile>
       
            
        </header>

    )
}