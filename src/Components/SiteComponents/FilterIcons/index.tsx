import { useState, useEffect } from "react"
// PROPS
import { FilterIconProps } from "Props/Components/FilterIconProps"
// CSS 
import './FilterIcons.css'
// TOOLS
import FilterButtons from "./components/FilterButtons"
import IconsList from "./components/IconList"
import { UnqiueValues } from "Tools/ObjectDataTools"

const FilterIcons = (props: FilterIconProps) => {

    // The filter type's initial state is empty
    const [filterType, setFilterType] = useState('')
    // The results is set when filtered, inital state is the input data.
    const [resultsData, setResultsData] = useState(props.data)

    // Only returns a title is passed as an argument
    const titleLogic = () => {
        if (props.title) return <h1>{props.title}</h1>
    }

    useEffect(() => {
        // Logic is only set when filter type is set.
        if (filterType !== '') {
            // The results is set when filtered, inital state is the input data.
            setResultsData(props.data.filter(data => data.type === filterType))
        }
    },[filterType, props.data])
    
    return (
        <div className="filter-icons">
            {titleLogic()}
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