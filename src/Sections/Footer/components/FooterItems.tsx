// PROPS
import { footerCopyrightProps, footerSectionDataProps } from "Props/Sections/FooterProps"
// TOOLS
import { RenderLogic } from "Tools/FunctionTools"
import SiteIcon from "Tools/SiteIcon"
import { SiteLink } from "Tools/LinkTools"

export const FooterHeading = (props: {heading?: string}) => RenderLogic(<h3>{props.heading}</h3>, "")

export const FooterLogos = (props: footerSectionDataProps) => {

    const { icon, link } = props

    return (
        <div className="site-span-1">
            <SiteLink
                link={RenderLogic(link, "")}
                placeholder={
                    <SiteIcon 
                        type={icon} 
                        size="2x"
                    />
                }
                type="external"  
            />
        </div>
    )
}

export const FooterLinks = (props: footerSectionDataProps) => {

    const { link, title } = props 

    return (
        <div className="site-span-1" 
            key={title}
        >
            <SiteLink 
                link={`/${link}`} 
                type="local" 
                placeholder={title}
            />
        </div>
    )
}

export const FooterCopyRight = (props: footerCopyrightProps) => (
    <div className="footer-copyright">
        &copy; <i>Designed by {props.name} {props.year}</i>
    </div>
)
