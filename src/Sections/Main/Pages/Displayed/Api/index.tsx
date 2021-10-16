// CSS
import './Api.css'
// COMPONENTS
import AntdTabs from "Components/ExternalLibraries/AntdTabs"
// TABS
import HskApi from "./components/HskApi"
import YoutubeApi from "./components/YoutubeApi"
import ApiTutorial from './components/ApiTutorial'
import StoreApi from './components/StoreApi'
// import ItunesApi from './components/ItunesApi'

const ApiData = [

    {
        title: "Store",
        content: <StoreApi />   
    },
    {
        title: "Youtube",
        content: <YoutubeApi />   
    },
    {
        title: "HSK",
        content: <HskApi />   
    },
    {
        title: "How does it work?",
        content: ApiTutorial
    },
]

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