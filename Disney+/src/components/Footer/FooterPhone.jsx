import React from 'react'
import { Profile } from '../Header/Profile/profile'
import { IconsPhone } from './Phone/icons/icons'



export function FooterPhone() {
    return (
        <section>
            <div id="footerphone">
            <IconsPhone iconUrl='./src/assets/homegray.png'></IconsPhone>
            <IconsPhone iconUrl="./src/assets/searchgrays.png"></IconsPhone>
            <IconsPhone iconUrl="./src/assets/download.png"></IconsPhone>
            <img src="https://emi9d8rzue7.exactdn.com/wp-content/uploads/2021/12/Encanto-Avatar.png?strip=all&lossy=1&resize=800%2C800&ssl=1"></img>
            </div>
        </section>

    )
}