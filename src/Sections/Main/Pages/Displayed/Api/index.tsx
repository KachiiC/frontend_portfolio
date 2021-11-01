// CSS
import './Api.css'
// COMPONENTS
import AntdTabs from "Components/ExternalLibraries/AntdTabs"
// TABS
import ApiData from 'Data/Main/Displayed/Api/ApiData'


const Api = (
    <div className="components-page-container">
        <h1>API Components</h1>
        <p>
            These example of project which can uses apis to populate a component.
        </p>    
        <AntdTabs data={ApiData} /> 
    </div>
)

export default Api