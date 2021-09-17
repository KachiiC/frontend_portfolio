// PROPS
import { SectionExampleProps } from 'Props/DataProps'
// COMPONENTS
import SectionExample from 'Components/SiteComponents/SectionExample'
// DATA
import NavSectionData from 'Data/Main/Displayed/Components/MyComponents/NavbarData'

const displaySections = NavSectionData.map((nav: SectionExampleProps) => (
    <SectionExample
        title={nav.title}
        image={nav.image}
        description={nav.description}
    />
))

const SiteNavbarComponent = (
    <div className="section-tab-content">
        <p>The navigation bar for this portfolio is a responsive component built with react and typscript.</p>
        {displaySections}
    </div>
)

export default SiteNavbarComponent