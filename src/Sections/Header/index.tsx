// DATA
import PagesData from "Data/Main/Displayed/PagesData"
// COMPONENTS
import SiteNavbar from "./SiteNavbar"

const SiteHeader = (
    <SiteNavbar
        title="Kachi's Portfolio" 
        data={PagesData}
        menu_number={5}
    />
)

export default SiteHeader