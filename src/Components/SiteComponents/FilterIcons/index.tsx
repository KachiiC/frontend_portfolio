import { useState, useEffect } from "react"
// PROPS
import { FilterIconProps } from "Props/Components/FilterIconProps"
// CSS 
import './FilterIcons.css'
// TOOLS
import { TitleLogic } from "Tools/StringTools"
import { UnqiueValues } from "Tools/ObjectDataTools"
// COMPONENTS
import FilterButtons from "./components/FilterButtons"
import IconsList from "./components/IconList"

const FilterIcons = (props: FilterIconProps) => {

    // The filter type's initial state is empty
    const [filterType, setFilterType] = useState('')
    // The results is set when filtered, inital state is the input data.
    const [resultsData, setResultsData] = useState(props.data)

    useEffect(() => {
        // Logic is only set when filter type is set.
        if (filterType !== '') {
            // The results is set when filtered, inital state is the input data.
            setResultsData(props.data.filter(data => data.type === filterType))
        }
    },[filterType, props.data])
    
    return (
        <div className="filter-icons">
            {/* Only returns a title is passed as an argument */}
            {TitleLogic(props.title, "h1")}
            <FilterButtons 
                data={UnqiueValues(props.data, "type")} 
                setFunction={setFilterType}
                setAll={() => setResultsData(props.data)}
            />
            <IconsList 
                data={resultsData} 
            />
        </div>
    )
}

export default FilterIcons