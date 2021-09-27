import { useState, useEffect } from "react"
// PROPS
import { FilterIconProps, FilterIconDataProps } from "Props/Components/FilterIconProps"
// CSS 
import './FilterIcons.css'
// TOOLS
import FilterButtons from "./components/FilterButtons"
import IconsList from "./components/IconList"

const FilterIcons = (props: FilterIconProps) => {

    const [filterType, setFilterType] = useState('')
    const [resultsData, setResultsData] = useState<FilterIconDataProps[]>(props.data)

    const titleLogic = () => {
        if (props.title) return <h1>{props.title}</h1>
    }

    useEffect(() => {
        if (filterType !== '') {
            setResultsData(props.data.filter(data => data.type === filterType))
        }
    },[filterType, props.data])
    
    return (
        <div className="filter-icons">
            {titleLogic()}
            <FilterButtons 
                data={props.data} 
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