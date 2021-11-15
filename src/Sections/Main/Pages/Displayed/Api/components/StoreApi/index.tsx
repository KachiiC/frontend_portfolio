// COMPONENTS
import SiteCards from "Components/SiteComponents/SiteCards"
import StoreData from "./StoreDataConverter"
// TOOLS
import { KachiiRestApi } from "URLs/KachiisRestApi"
import { SiteFetcher, SiteRender } from "Tools/SiteFetcherTool"
import { SiteLink } from "Tools/LinkTools"

const store_link = KachiiRestApi("backend", "mma/store")

const StoreApi = () => {

    const fetchData = SiteFetcher(store_link)

    const StoreCards = (
        <SiteCards 
            data={StoreData(fetchData.response)} 
            card_size="small"
        />
    )

    const venum_link = (
        <SiteLink type="external"
            link="https://uk.venum.com/gb/new-arrivals.html"
            placeholder="Venum store"
        />
    )

    return (
        <>
            <p>
                This is an example of using the fetch component to return an array of store items from an 
                e-commerce store. The api webscrapes items from the {venum_link} and returns them as data,
                we can then use the site card component to return a card for each scraped from the store. 
            </p>
            <SiteRender 
                fetch={fetchData} 
                component={StoreCards} 
            />
        </>
    )
}

export default StoreApi