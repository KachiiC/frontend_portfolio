import { useState } from "react"
// PROPS
import { SiteTabsProps } from "Props/Components/TabProps"
// CSS
import './SiteTabs.css'
// COMPONENTS
import {TabContent, TabLink} from './components/TabComponents'

const SiteTabs = (props: SiteTabsProps) => {

    const { data, width } = props

    // COMPONENT WIDTH
    const widthLogic = width ? width : 90

    // TAB LOGIC
    const [displayTab, setDisplayTab] = useState(0)

    // TAB LINKS
    const displayedTabs = data.map(tab => {

        const clickLogic = () => setDisplayTab(data.indexOf(tab))

        return (
            <TabLink
                click={() => clickLogic()}
                title={tab.title}
                key={tab.title}
            />
        )
    })

    return (
        <div className={`w-${widthLogic} m-auto`}>
            <div className="site-tab-rows">
                {displayedTabs}
            </div>
            <TabContent 
                content={data[displayTab].content} 
            />
        </div>

    )
} 

export default SiteTabs