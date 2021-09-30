// PROPS
import { FilterIconDataProps } from "Props/Components/FilterIconProps"
// TOOLS
import SiteIcon from "Tools/SiteIcon"

const IconsList = (props: any) => {

    const displayedIcons = props.data.map((obj: FilterIconDataProps) => (
        <div className="site-col-2 filter-icons-icon" 
            key={obj.skill}
        >
            <SiteIcon type={obj.skill} size="2x" />
            <h3>{obj.skill.toUpperCase()}</h3>
        </div>
    ))

    return (
        <div className="site-grid-system w-80 m-auto">
            {displayedIcons}
        </div>
    )
} 

export default IconsList


