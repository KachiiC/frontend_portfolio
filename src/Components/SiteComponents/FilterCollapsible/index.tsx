import { useState } from "react";
// CSS
import './FilterCollapsible.css'
// PROPS
import { targetProps } from "Props/ToolProps";
import { FilterCollapsibleProps } from "Props/ComponentProps";
// COMPONENTS
import SiteCollapsible from "../SiteCollapsible";

const FilterCollapsible = (props: FilterCollapsibleProps) => {

    const {data, width, placeholder} = props

    const [input, setInput] = useState('');
    const [foundResults, setFoundResults] = useState(data)

    const filterFunction = (e: targetProps) => {
        const keyword = e.target.value;

        const resultsLogic = data.filter(result => 
            result.title.toLowerCase().startsWith(keyword.toLowerCase())
        )

        keyword !== '' ? setFoundResults(resultsLogic) : setFoundResults(data)
        
        setInput(keyword)
    }

    const placeholderLogic = placeholder ? placeholder : "search"

    const filterLogic = foundResults && foundResults.length > 0 ? 
        <SiteCollapsible 
            data={foundResults} 
            width={width}
        />
        : 
        <div>
            <h2>No results found!</h2>
        </div>

    return (
        <div className="filter-collapsible">
            <input onChange={filterFunction} 
                className={`w-${width}`}
                placeholder={placeholderLogic}
            />
            {filterLogic}
        </div>
    )
}

export default FilterCollapsible