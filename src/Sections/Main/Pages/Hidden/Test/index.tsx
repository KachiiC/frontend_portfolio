import { useState } from 'react';
// CSS
import './Test.css'
import SiteCollapsibleComponent from 'Components/SiteComponents/SiteCollapsible'
import { CollapsibleData } from 'Data/Main/Displayed/Components/ComponentsListData/CollapsibleData'

const Test = () => {
    const [itemVisible, setItemVisible] = useState(false)

    const clickLogic = () => !itemVisible ? setItemVisible(true) : setItemVisible(false)

    return (
        <>
            <button className="test-button" 
                onClick={clickLogic} 
            >
                Show Item
            </button>
            <SiteCollapsibleComponent 
                data={CollapsibleData} 
            /> 
        </>
    )
}

export default Test