// COMPONENTS
import SectionExample from 'Components/SiteComponents/SectionExample'
// DATA
import FooterSectionData from 'Data/Main/Displayed/Components/MyComponents/FooterData'
// PROPS
import { SectionExampleProps } from 'Props/DataProps'


const displaySections = FooterSectionData.map((nav: SectionExampleProps) => (
    <SectionExample
        title={nav.title}
        image={nav.image}
        description={nav.description}
    />
))

const SiteNavbarComponent = (
    <div className="section-tab-content">
        <p>The Footer for this portfolio is a responsive component built with react and typscript.</p>
        {displaySections}
    </div>
)

export default SiteNavbarComponent