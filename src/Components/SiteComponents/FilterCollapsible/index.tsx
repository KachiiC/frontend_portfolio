import { useState } from "react"
// CSS
import './FilterCollapsible.css'
// PROPS
import { FilterCollapsibleProps } from "Props/Components/FilterCollapsibleProps"
import { TargetProps } from "Props/ToolProps"
// TOOLS
import { RenderLogic } from "Tools/FunctionTools"
// COMPONENTS
import SiteCollapsible from "../SiteCollapsible"

const FilterCollapsible = (props: FilterCollapsibleProps) => {

    const { data, width, placeholder } = props

    // The input string used to filter
    const [input, setInput] = useState('')
    // The results which match the input, intial value is the entire data set
    const [foundResults, setFoundResults] = useState(data)

    // Filters the data and returns the titles which begin with the same letters as input 
    const filterFunction = (e: TargetProps) => {
        const keyword = e.target.value;

        // words that begin with input are returned
        const resultsLogic = data.filter(result => 
            result.title.toLowerCase().startsWith(keyword.toLowerCase())
        )

        // logic only kicks in when keyword is not empty string
        keyword !== '' ? setFoundResults(resultsLogic) : setFoundResults(data)
        
        setInput(keyword)
    }

    // Width is 100% by default 
    const widthLogic = RenderLogic(width, 100)

    // Filters the collpasible component titles and returns "No results found!" foundResults is empty.
    const filterLogic = foundResults && foundResults.length > 0 ? 
        <SiteCollapsible 
            data={foundResults} 
            width={widthLogic}
        />
        : 
        <div>
            <h2>No results found!</h2>
        </div>

    return (
        <div className="filter-collapsible">
            {/* Filter begins on change */}
            <input onChange={filterFunction} 
                className={`w-${widthLogic}`}
                // If no placeholder is specified, "search" is used as the placeholder
                placeholder={RenderLogic(placeholder, "search")}
            />
            {filterLogic}
        </div>
    )
}

export default FilterCollapsible