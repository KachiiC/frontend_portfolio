// PROPS
import { ComponentTabProps } from "Props/ComponentProps"
// COMPONENTS
import SectionExample from "Components/SiteComponents/SectionExample"

const ComponentsTab = (props: ComponentTabProps) => {

    const {component, introduction, sections } = props

    const componentLogic = () => {
        if (component) return component
    }

    const displaySections = sections.map(nav => (
        <SectionExample
            title={nav.title}
            example={nav.example}
            image={nav.image}
            description={nav.description}
            key={nav.title}
        />
    ))

    return (
        <>
            <p>{introduction}</p>
            {componentLogic()}
            {displaySections}
        </>
    )

}

export default ComponentsTab