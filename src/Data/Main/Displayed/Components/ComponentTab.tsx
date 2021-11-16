// PROPS
import { ComponentTabProps } from "Props/ComponentProps"
// COMPONENTS
import SectionExample from "Components/SiteComponents/SectionExample"
import { SiteLink } from "Tools/LinkTools"

const ComponentsTab = (props: ComponentTabProps) => {

    const { title, link, component, introduction, sections } = props

    const componentLogic = () => {
        if (component) return component
    }

    const displaySections = sections.map(nav => {
        
        const {
            title,
            description,
            example,
            image,
        } = nav

        const SectionExampleProps = {
            key: title,
            description: description,
            example: example,
            image: image,
            title: title,
        }

        return (
            <SectionExample 
                {...SectionExampleProps}
            />
        )
    })

    return (
        <div className="components-page">
            <SiteLink
                placeholder={<h1>{title}</h1>}
                type="external" 
                link={link}                
            />
            <p>{introduction}</p>
            {componentLogic()}
            {displaySections}
        </div>
    )

}

export default ComponentsTab