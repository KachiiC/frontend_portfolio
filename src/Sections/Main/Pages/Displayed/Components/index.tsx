// CSS
import './Components.css'
// COMPONENTS
import AntdTabs from "Components/ExternalLibraries/AntdTabs"
// DATA
import { ComponentsData } from "Data/Main/Displayed/Components/ComponentsData"

const Components = (
    <>
        <h1>Components Content</h1>
        <AntdTabs data={ComponentsData} />
    </>
)

export default Components