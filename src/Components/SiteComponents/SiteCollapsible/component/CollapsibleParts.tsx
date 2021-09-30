// PROPS
import { CollapsibleContentProps, CollapsibleHeadingProps } from "Props/Components/CollapsibleProps"
// TOOLS
import SiteIcon from "Tools/SiteIcon"

export const CollapsibleHeading = (props: CollapsibleHeadingProps) => {

    const {click, direction, title} = props
    
    // Direction is detirmined by whether tab is open or not
    return (
        <div className={`site-collapsible m-auto cursor-pointer`} 
            onClick={() => click}
        >
            {title}
            <div className="collapsible-icon">
                <SiteIcon 
                    type={direction} 
                    size="1x"
                />
            </div>
        </div>
    )
}

export const CollapsibleContent = (props: CollapsibleContentProps) => (
    <div className={`site-collapsible-content w-${props.width} m-auto site-border`}>
        {props.content}
    </div>
)