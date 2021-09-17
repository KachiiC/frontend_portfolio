// CSS
import './SiteCollapsible.css'
// PROPS
import { CollapsibleProps } from "Props/ComponentProps"
// COMPONENTS
import SingleTabComponent from "./component/SingleCollapsible"

const SiteTabsComponent = (props: CollapsibleProps) => {

    const widthLogic = props.width ? props.width : 100
    
    const displayedTabs = props.data.map((tab: any) => (
        <SingleTabComponent
            title={tab.title}
            content={tab.content}
            width={widthLogic}
        />
    ))

    return (
        <div className={`w-${widthLogic} site-collapsible-container`}>
            {displayedTabs}
        </div>
    )
}

export default SiteTabsComponent