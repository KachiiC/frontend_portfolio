// DATA
import { FooterLogoData, FooterPages } from 'Data/Footer/FooterData'
// CSS
import './Footer.css'
// COMPONENTS
import SiteFooter from './components/SiteFooter'


const Footer = (
    <footer>
        <SiteFooter 
            heading="Useful Links"
            logo_data={FooterLogoData}
            links_data={FooterPages}
            name="Kachi Cheong"
            year="2021"
        />
    </footer>
)

export default Footer