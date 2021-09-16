// PROPS
import { TabContentProps, TabHeadingProps } from "Props/ComponentProps"
// TOOLS
import SiteIcon from "Tools/SiteIcon"

export const TabHeading = (props: TabHeadingProps) => {

    const {click, direction, title, width} = props

    return (
        <div className={`site-tab w-${width} m-auto cursor-pointer`} 
            onClick={click}
            >
            {title}
            <div className="tab-icon">
                <SiteIcon type={direction} size="1x"/>
            </div>
        </div>
    )
}

export const TabContent = (props: TabContentProps) => (
    <div className={`site-tab-content w-${props.width} m-auto site-border`}>
        {props.content}
    </div>

)