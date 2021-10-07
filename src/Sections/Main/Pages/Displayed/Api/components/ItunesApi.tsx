import { SiteFetcher } from "Tools/SiteFetcherTool"

const ItunesApi = () => {

    const fetchData = SiteFetcher(
        "https://api.coinbase.com/v2/exchange-rates?currency=BTC", 
    )

    console.log(fetchData.response)

    return (
        <>
        </>
    )
}

export default ItunesApi