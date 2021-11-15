import { Link } from "react-router-dom";
// PROPS
import { footerCopyrightProps, footerSectionDataProps } from "Props/FooterProps";
// TOOLS
import SiteIcon from "Tools/SiteIcon";
import { RenderLogic } from "Tools/FunctionTools";
import { SiteLink } from "Tools/LinkTools";

export const FooterHeading = (props: {heading?: string}) => RenderLogic(<h3>{props.heading}</h3>, "")

export const FooterLogos = (props: footerSectionDataProps) => {

    const { icon, link } = props

    return (
        <div className="site-span-1">
            <SiteLink
                type="external"
                placeholder={
                    <SiteIcon 
                        type={icon} 
                        size="2x"
                    />
                }
                link={RenderLogic(link, "")}
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
            <Link to={`/${link}`}>
                {title}
            </Link>
        </div>
    )
}

export const FooterCopyRight = (props: footerCopyrightProps) => (
    <div className="footer-copyright">
        &copy; <i>Designed by {props.name} {props.year}</i>
    </div>
)
