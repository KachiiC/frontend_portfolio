import { useEffect, useState } from "react"
// CSS 
import './FilterGallery.css'
// PROPS
import { SiteCardProps } from "Props/Components/CardProps"
// TOOLS
import { UnqiueValues } from "Tools/ObjectDataTools"
// COMPONENTS
import DisplayedFilterButtons from "./components/FilterButtons"
import FilterGalleryComponent from "./components/FilterGalleryComponent"

const FilterGallery = (props: SiteCardProps) => {

    const [filterType, setFilterType] = useState('')
    const [resultsData, setResultsData] = useState(props.data)

    useEffect(() => {
        if (filterType !== '') {
            setResultsData(props.data.filter(data => data.type === filterType))
        }
    },[filterType, props.data])

    const filterButtons = (
        <DisplayedFilterButtons
            data={UnqiueValues(props.data, "type")}
            setFilterFunction={setFilterType}
            setAll={() => setResultsData(props.data)}
        />
    )
    
    return (
        <FilterGalleryComponent 
            buttons={filterButtons}
            data={resultsData}
            card_size={props.card_size}
        />
    )
}

export default FilterGallery