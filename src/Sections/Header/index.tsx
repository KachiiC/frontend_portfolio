// DATA
import PagesData from "Data/Main/Displayed/PagesData"
// COMPONENTS
import SiteNavbar from "./SiteNavbar"

const SiteHeader = (
    <header>
        <SiteNavbar
            title="Kachi's Portfolio" 
            data={PagesData}
        />
    </header>
)

export default SiteHeader