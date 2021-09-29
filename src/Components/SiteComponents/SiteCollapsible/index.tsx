// CSS
import './SiteCollapsible.css'
// PROPS
import { CollapsibleProps } from 'Props/Components/CollapsibleProps'
// COMPONENTS
import SingleTabComponent from "./component/SingleCollapsible"

const SiteCollapsibleComponent = (props: CollapsibleProps) => {
    
    const displayedTabs = props.data.map(tab => (
        <SingleTabComponent
            title={tab.title}
            content={tab.content}
            key={tab.title}
        />
    ))

    return (
        <div className={`w-${props.width} site-collapsible-container`}>
            {displayedTabs}
        </div>
    )
}

export default SiteCollapsibleComponent