// COMPONENTS
import SiteTable from "Components/SiteComponents/SiteTable"
// PROPS
import { FinanceApiProps } from "Props/Api/FinanceApiProps"
// TOOLS
import { KachiiRestApi } from "URLs/KachiisRestApi"
import { SiteFetcher, SiteRender } from "Tools/SiteFetcherTool"


const FinanceApi = (props: FinanceApiProps) => {

    // PROPS
    const { type } = props
    
    const fetchData = SiteFetcher(
        KachiiRestApi("backend", `finance/${type}_list/gainers`)
    )

    const FinanceTable = (
        <SiteTable
            data={fetchData.response} 
        />
    )

    return (
        <SiteRender 
            fetch={fetchData} 
            component={FinanceTable} 
        />
    )
}

export default FinanceApi