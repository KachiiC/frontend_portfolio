import FilterGallery from "Components/SiteComponents/FilterGallery"
import { CardsData } from "Data/Main/Displayed/Components/ComponentsListData/CardsData"

const Test = () => {
    return (
        <>
            <h1>Test</h1>
            <p>Test Content</p>
            <FilterGallery 
                data={CardsData}
                card_size="medium"
            />
        </>
    )
}

export default Test