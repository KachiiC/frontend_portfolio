import { useEffect, useState } from "react"
// CSS 
import './FilterGallery.css'
// PROPS
import { SiteCardProps } from "Props/Components/CardProps"
// TOOLS
import { RenderLogic } from "Tools/FunctionTools"
import { UnqiueValues } from "Tools/ObjectDataTools"
// COMPONENTS
import FilterGalleryButtons from "./components/FilterGalleryButtons"
import FilterGalleryComponent from "./components/FilterGalleryComponent"

const FilterGallery = (props: SiteCardProps) => {

    // The filter type's initial state is empty
    const [filterType, setFilterType] = useState('')
    // The results is set when filtered, inital state is the input data.
    const [resultsData, setResultsData] = useState(props.data)

    useEffect(() => {
        // Logic is only set when filter type is set.
        if (filterType !== '') {
            // filters array for objects whose "type" key matches fitlerType 
            setResultsData(props.data.filter(data => data.type === filterType))
        }
    },[filterType, props.data])

    // Returns a filter button for each unique value in from all the "types" in objects   
    const filterButtons = (
        <FilterGalleryButtons
            data={UnqiueValues(props.data, "type")}
            setFilterFunction={setFilterType}
            setAll={() => setResultsData(props.data)}
        />
    )
    
    return (
        <FilterGalleryComponent 
            data={resultsData}
            buttons={filterButtons}
            // If card size is not defined, it is set to medium as a default.
            card_size={RenderLogic(props.card_size, "medium")}
        />
    )
}

export default FilterGallery