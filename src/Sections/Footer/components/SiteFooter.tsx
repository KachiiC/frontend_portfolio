// COMPONENTS
import FooterSection from './FooterSection'
import { FooterHeading, FooterCopyRight } from './FooterItems'

const SiteFooter = (props: any) => (
    <>
        <FooterHeading 
            heading={props.heading}
        />
        <FooterSection 
            data={props.logo_data} 
            type="logos"
        />
        <FooterSection 
            data={props.links_data} 
            type="links"
        />
        <FooterCopyRight 
            name={props.name}
            year={props.year}
        />
    </>
)

export default SiteFooter