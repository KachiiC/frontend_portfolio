// DATA
import CollapsibleData from "Data/Main/Displayed/Components/MyComponents/CollapsibleData"
// COMPONENTS
import SiteTabsComponent from "Components/SiteComponents/SiteCollapsible"

const CollapsibleTabsComponent = (
    <>
        <p>This is a collapsible component.</p>
        <SiteTabsComponent data={CollapsibleData} />
    </>
)

export default CollapsibleTabsComponent