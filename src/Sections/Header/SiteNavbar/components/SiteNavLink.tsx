import { Link } from 'react-router-dom'
// PROPS
import { SiteNavLinkProps } from 'Props/HeaderProps'

const SiteNavLink = (props: SiteNavLinkProps) => {

    // Logic dealing with size of the link 
    const linkSizeLogic = props.type === "small" ? 
        "site-small-link"
        : 
        "site-nav-link"

    // Logic dealing with link type
    const linkType = props.data.external_link ? 
        <a href={props.data.external_link} 
            target="_blank" 
            rel="noreferrer"
        >
            {props.data.title}
        </a>
        :
        <Link to={`/${props.data.link}`}>
            {props.data.title}
        </Link>

    return (
        <div className={linkSizeLogic} 
            onClick={props.click}
        >
            {linkType}
        </div>
    )
}

export default SiteNavLink