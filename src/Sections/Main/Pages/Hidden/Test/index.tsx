// CSS
import './Test.css'
// COMPONENTS
import SiteCollapsible from 'Components/SiteComponents/SiteCollapsible'
// DATA
import { CollapsibleData } from 'Data/Main/Displayed/Components/ComponentsListData/CollapsibleData'

const Test = () => {

    return (
        <>
            <h1>Test</h1>
            <SiteCollapsible
                data={CollapsibleData} 
                width={90} 
            />
        </>
    )
}

export default Test