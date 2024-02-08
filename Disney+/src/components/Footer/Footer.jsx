import React from 'react'
import { About } from './About/about'
import { CopyRight } from './Copyright/copyright'
import { Logo2 } from './Logo2/logo2'
import { Terms } from './Terms/terms'

export function Footer() {
    return (

        <footer>
            <Logo2></Logo2>
            <About></About>
            <Terms></Terms>
            <CopyRight></CopyRight>
        </footer>
    )
}