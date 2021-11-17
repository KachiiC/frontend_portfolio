// PROPS
import { footerSectionProps } from 'Props/Sections/FooterProps'
// COMPONENTS
import { FooterLogos, FooterLinks } from './FooterItems'

const FooterSection = (props: footerSectionProps) => {

    const { data } = props

    const displayFooterItems = data.map(logo => {

        // PROPS
        const { link, title } = logo

        const logoProps = {
            link: link,
            icon: title,
            title: title,
            key: title
        }
        
        return props.type === "logos" ?
            <FooterLogos
                {...logoProps} 
            />
            :
            <FooterLinks
                {...logoProps}
            /> 
        
    })


    const gridTemplateLogic = {
        "gridTemplateColumns": `repeat(${data.length}, 1fr)`
    }

    return (
        <div className="footer-section w-80 m-auto">
            <div className="site-grid" 
                style={gridTemplateLogic}
            >
                {displayFooterItems}
            </div>
        </div>
    )
}

export default FooterSection