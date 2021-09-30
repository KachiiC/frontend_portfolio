// CSS
import './SiteCollapsible.css'
// PROPS
import { CollapsibleProps } from 'Props/Components/CollapsibleProps'
// COMPONENTS
import SingleTabComponent from "./component/SingleCollapsible"

const SiteCollapsibleComponent = (props: CollapsibleProps) => {
    
    const displayedTabs = props.data.map(tab => (
        <SingleTabComponent
            key={tab.title}
            title={tab.title}
            content={tab.content}
        />
    ))

    return (
        <div className={`w-${props.width} site-collapsible-container`}>
            {displayedTabs}
        </div>
    )
}

export default SiteCollapsibleComponent