// CSS
import './Components.css'
// COMPONENTS
import AntdTabs from "Components/ExternalLibraries/AntdTabs"
// DATA
import { MyComponentsData } from 'Data/Main/Displayed/Components/MyComponents'

const Components = (
    <div className="components-page-container">
        <h1>My Components</h1>
        <p>
            These a portfolio of components built by Kachii Cheong, they are written in react tyscript. 
            The components do not rely on any component library and reusable for any page!, the code for 
            each component is linked to each page
        </p>
        <AntdTabs data={MyComponentsData}  />
    </div>
)

export default Components