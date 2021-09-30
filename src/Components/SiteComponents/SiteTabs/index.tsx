import { useState } from "react"
// PROPS
import { SiteTabsProps } from "Props/Components/TabProps"
// CSS
import './SiteTabs.css'
// TOOLS
import { RenderLogic } from "Tools/FunctionTools"
// COMPONENTS
import { TabContent, TabLinksRow } from './components/TabComponents'

const SiteTabs = (props: SiteTabsProps) => {

    // displayTab detirmines which tabs is current displayed, default is first tab
    const [displayTab, setDisplayTab] = useState(0)

    return (
        // By default width of component is 90%
        <div className={`site-tabs-component m-auto w-${RenderLogic(props.width, 90)}`}>
            <TabLinksRow
                data={props.data}
                setFunction={setDisplayTab}
            />
            <TabContent 
                content={props.data[displayTab].content} 
            />
        </div>
    )
} 

export default SiteTabs