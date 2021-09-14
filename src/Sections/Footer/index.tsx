// DATA
import { FooterLogoData, FooterPages } from 'Data/Footer/FooterData'
// CSS
import './Footer.css'
// COMPONENTS
import FooterSection from './components/FooterSection'
import { FooterHeading, FooterCopyRight } from './components/FooterItems'


const SiteFooter = (
    <footer>
        <FooterHeading 
            heading="Useful Links" 
        />
        <FooterSection 
            data={FooterLogoData} 
            type="logos"
        />
        <FooterSection 
            data={FooterPages} 
            type="links"
        />
        <FooterCopyRight 
            name="Kachi Cheong" 
            year="2021" 
        />
    </footer>
)

export default SiteFooter