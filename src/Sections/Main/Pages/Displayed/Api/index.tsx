
import AntdTabs from "Components/ExternalLibraries/AntdTabs"
import HskApi from "./components/HskApi"
import YoutubeApi from "./components/YoutubeApi"

const ApiData = [
    {
        title: "Youtube API",
        content: <YoutubeApi />   
    },
    {
        title: "Hsk",
        content: <HskApi />   
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