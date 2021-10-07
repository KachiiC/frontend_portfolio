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
            <SiteRender 
                fetch={fetchData} 
                component={HskTable} 
            />
        </>
    )
}

export default HskApi