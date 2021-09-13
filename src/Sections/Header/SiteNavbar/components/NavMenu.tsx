// PROPS
import { NavMenuProps } from "Props/HeaderProps"
// COMPONENTS
import SiteNavLink from "./SiteNavLink"


const NavMenu = (props: NavMenuProps) => {

    const sliceLogic  = props.menu_number ? props.menu_number : 5

    const displayedNavLinks = props.data.map(page => {

        return props.menu_type === "full" ? 
            <SiteNavLink data={page} /> 
            : 
            <SiteNavLink
                click={props.click}
                data={page}
                type="small"
            />

    }).slice(0, sliceLogic)

    return (
        <>
            {displayedNavLinks} 
        </>
    )
}

export default NavMenu