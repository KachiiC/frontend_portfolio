// CSS
import './SiteTabs.css'
// PROPS
import { TabProps } from "Props/ComponentProps"
// COMPONENTS
import SingleTabComponent from "./component/SingleTabComponent"

const SiteTabsComponent = (props: TabProps) => {

    const widthLogic = props.width ? props.width : 100
    
    const displayedTabs = props.data.map((tab: any) => (
        <SingleTabComponent
            title={tab.title}
            content={tab.content}
            width={widthLogic}
        />
    ))

    return (
        <div className={`w-${widthLogic} site-tabs-container`}>
            {displayedTabs}
        </div>
    )
}

export default SiteTabsComponent