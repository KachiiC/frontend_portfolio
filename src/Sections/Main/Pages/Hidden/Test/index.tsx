// CSS
import FilterGallery from 'Components/SiteComponents/FilterGallery'
import { CardsData } from 'Data/Main/Displayed/Components/ComponentsListData/CardsData'
import './Test.css'
// COMPONENTS
// DATA

const Test = () => {

    return (
        <>
            <h1>Test</h1>
            <FilterGallery 
                data={CardsData}
                card_size="medium"
            />
        </>
    )
}

export default Test