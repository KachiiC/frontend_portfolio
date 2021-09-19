// PROPS
import { SectionExampleProps } from "Props/ComponentProps"
// COMPONENTS
import SectionExample from "Components/SiteComponents/SectionExample"

const ComponentsTab = (props: any) => {

    const {component, introduction, sections } = props

    const displaySections = sections.map((nav: SectionExampleProps) => (
        <SectionExample
            title={nav.title}
            image={nav.image}
            description={nav.description}
            key={nav.title}
        />
    ))

    const componentLogic = () => {
        if (component) return component
    }

    return (
        <>
            <p>{introduction}</p>
            {componentLogic()}
            {displaySections}
        </>
    )

}

export default ComponentsTab