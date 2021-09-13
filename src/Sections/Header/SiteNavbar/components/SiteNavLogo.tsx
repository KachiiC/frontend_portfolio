import { Link } from 'react-router-dom'
// PROPS
import { NavLinkProps } from 'Props/HeaderProps'


const SiteNavLogo = (props: NavLinkProps ) => {

    const linkLogic = props.link ? props.link : ""

    return (
        <div className="site-nav-logo">
            <Link to={`/${linkLogic}`}>
                {props.title}
            </Link>
        </div>
    )
}

export default SiteNavLogo