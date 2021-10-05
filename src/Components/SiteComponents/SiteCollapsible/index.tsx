// CSS
import './SiteCollapsible.css'
// PROPS
import { CollapsibleProps } from 'Props/Components/CollapsibleProps'
// COMPONENTS
import SingleTabComponent from "./component/SingleCollapsible"

const SiteCollapsibleComponent = (props: CollapsibleProps) => {

    const { data, width } = props
    
    const displayedTabs = data.map(tab => (
        <SingleTabComponent
            key={tab.title}
            title={tab.title}
            content={tab.content}
        />
    ))

    return (
        <div className={`site-collapsible-container w-${width}`}>
            {displayedTabs}
        </div>
    )
}

export default SiteCollapsibleComponent