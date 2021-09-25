import { useState } from 'react'
// CSS
import './FilterList.css'
// PROPS
import { FilterProps } from "Props/Components/FilterProps"
import { targetProps } from 'Props/ToolProps'
// TOOLS
import { parseIntChecker } from 'Tools/IntergerTools'
// COMPONENTS
import FilterSearch from './FilterTable/FilterInput'
import FilterTable from './FilterTable'

const FilterList = (props: FilterProps) => {

    const { data, default_column, placeholder, width } = props

    // COLUMNS
    const columnOptions = Object.keys(data[0])
    const columnLogic = default_column ? default_column : columnOptions[0]
    const [column, setColumn] = useState(columnLogic)
    const columnFunction = (e : targetProps) => {
        setColumn(e.target.value)
    }

    // STATES
    const [input, setInput] = useState('');
    const [foundResults, setFoundResults] = useState(data);

    // DEFAULTS
    const widthLogic = width ? width : 90
    const placeholderLogic = placeholder ? placeholder : `search ${columnLogic}s`
    
    const filterFunction = (e: targetProps) => {
        const keyword = e.target.value;

        const resultsLogic = data.filter(result => 
            parseIntChecker(result[column]) ?
                parseInt(result[column]) === parseInt(keyword)
                : 
                result[column].toLowerCase().startsWith(keyword.toLowerCase())
        )

        keyword !== '' ? setFoundResults(resultsLogic) : setFoundResults(data)
        
        setInput(keyword)
    }

    const tableLogic = foundResults && foundResults.length > 0 ? 
        <FilterTable 
            data={data} 
            results_data={foundResults} 
        />
        : 
        <div>
            <h2>No results found!</h2>
        </div>

    return (
        <div className={`filter-list w-${widthLogic}`}>
            <FilterSearch
                data={columnOptions}
                default={default_column}
                function={columnFunction}
                on_change={filterFunction}
                placeholder={placeholderLogic}
                value={input}
            />
            {tableLogic}
        </div>
    )
}

export default FilterList;