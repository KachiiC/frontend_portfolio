// COMPONENTS
import SiteTable from "Components/SiteComponents/SiteTable"
// TOOLS
import { KachiiRestApi } from "URLs/KachiisRestApi"
import { SiteFetcher, SiteRender } from "Tools/SiteFetcherTool"

interface FinanceApiProps {
    type: string
}

const FinanceApi = (props: FinanceApiProps) => {

    // PROPS
    const { type } = props
    const finance_link = KachiiRestApi("backend", `finance/${type}_list/gainers`)
    
    const fetchData = SiteFetcher(finance_link)

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