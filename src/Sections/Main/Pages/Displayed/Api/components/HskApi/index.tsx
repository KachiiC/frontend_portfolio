// COMPONENTS
import FilterTable from "Components/FilterComponents/FilterTable"
// TOOLS
import { SiteFetcher, SiteRender } from "Tools/SiteFetcherTool"

const HskApi = () => {

    const fetchData = SiteFetcher("https://kachiis-rest.herokuapp.com/backend/hsk_words/")

    const HskTable = (
        <FilterTable 
            data={fetchData.response} 
            width={80}
        />
    )

    return (
        <>
            <p>
                This is an example of using the fetch component to return a array of objects returned to chinese words.
                When incoperated with our filter table function we can search the table for specific catergories 
                such as chinese charcter, definition or hsk level!
            </p>
            <SiteRender 
                fetch={fetchData} 
                component={HskTable} 
            />
        </>
    )
}

export default HskApi