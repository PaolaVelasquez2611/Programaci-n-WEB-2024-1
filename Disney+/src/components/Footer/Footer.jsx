import { about } from '../../Data/about'
import { terms } from '../../Data/terms'
import { About } from './About/about'
import { CopyRight } from './Copyright/copyright'
import { Logo2 } from './Logo2/logo2'
import { Terms } from './Terms/terms'

const dataText = about
const dataTerms = terms

export function Footer() {
    return (
        <footer>
            <Logo2></Logo2>
            <About texts={dataText}></About>
            <Terms texts={dataTerms}></Terms>
            <CopyRight></CopyRight>
        </footer>
    )
}