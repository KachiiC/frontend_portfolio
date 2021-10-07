// CSS
import './Test.css'
// TOOLS
import { SiteFetcher, SiteRender } from 'Tools/SiteFetcherTool'
import FilterTable from 'Components/SiteComponents/FilterTable'
// DATA
// import { TableData } from 'Data/Main/Displayed/Components/ComponentsListData/TableData'
// COMPONENTS
// import SiteTable from 'Components/SiteComponents/SiteTable'

const Test = () => {

    const fetch = SiteFetcher("https://kachiis-rest.herokuapp.com/backend/hsk_words/")

    const Table = (
        <FilterTable
            data={fetch.response}
        />
    )
    return (
        <>
            <h1>Test</h1>
            <SiteRender 
                component={Table} 
                fetch={fetch} 
            />
            {/* <SiteTable
                data={TableData}
            /> */}
        </>
    )
}

export default Test