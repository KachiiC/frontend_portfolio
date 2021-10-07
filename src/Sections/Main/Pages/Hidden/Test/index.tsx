// CSS
import SiteCards from 'Components/SiteComponents/SiteCards'
import { CardsData } from 'Data/Main/Displayed/Components/ComponentsListData/CardsData'
import './Test.css'
// TOOLS
// DATA
// COMPONENTS

const Test = () => {

    return (
        <>
            <h1>Test</h1>
            <SiteCards data={CardsData} />
        </>
    )
}

export default Test