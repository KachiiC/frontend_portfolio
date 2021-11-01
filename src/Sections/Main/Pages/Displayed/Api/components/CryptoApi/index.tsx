import SiteTable from "Components/SiteComponents/SiteTable"
import { SiteFetcher, SiteRender } from "Tools/SiteFetcherTool"
import { KachiiRestApi } from "URLs/KachiisRestApi"

const crypto_link = KachiiRestApi("backend", "finance/crypto_list/gainers")

const StockApi = () => {

    const fetchData = SiteFetcher(crypto_link)

    const StoreCards = (
        <SiteTable
            data={fetchData.response} 
        />
    )

    return (
        <>
            <SiteRender 
                fetch={fetchData} 
                component={StoreCards} 
            />
        </>
    )
}

export default StockApi