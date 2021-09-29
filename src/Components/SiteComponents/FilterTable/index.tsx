import { useState } from 'react'
// CSS
import './FilterList.css'
// PROPS
import { FilterProps } from "Props/Components/FilterProps"
import { targetProps } from 'Props/ToolProps'
// TOOLS
import { parseIntChecker } from 'Tools/IntergerTools'
import { ArrrayObjectKeys } from 'Tools/ObjectDataTools'
// COMPONENTS
import FilterSearch from './components/FilterInput'
import FilterTableComponent from './components/FilterTableComponent'

const FilterTable = (props: FilterProps) => {

    const { data, default_column, placeholder, width } = props

    // COLUMNS
    // Returns each key from the first object in the array as a string.
    // ** Make sure all objects have the same keys **
    const columnOptions = ArrrayObjectKeys(data)
    // Column which can be searched can be defined, set to first key by default
    const columnLogic = default_column ? default_column : columnOptions[0]
    const [column, setColumn] = useState(columnLogic)

    // Column can be changed and can be set in form  
    const columnFunction = (e : targetProps) => {
        setColumn(e.target.value)
    }

    // The input string used to filter
    const [input, setInput] = useState('')
    // The results which match the input, intial value is the entire data set
    const [foundResults, setFoundResults] = useState(data)

    // Width of table
    const widthLogic = width ? width : 90
    // Placeholder for input detirmined by input search column
    const placeholderLogic = placeholder ? placeholder : `search ${column}s`
    
    // Filters the data and returns the column type which begin with the same letters as input 
    const filterFunction = (e: targetProps) => {
        const keyword = e.target.value;

        const resultsLogic = data.filter(result => 
            // Checks if input is interger or string
            parseIntChecker(result[column]) ?
                // Returns all results which matches the input interger 
                parseInt(result[column]) === parseInt(keyword)
                : 
                // Returns all results which begin with the input string
                result[column].toLowerCase().startsWith(keyword.toLowerCase())
        )

        // Only returns results when input isn't empty
        keyword !== '' ? setFoundResults(resultsLogic) : setFoundResults(data)
        
        setInput(keyword)
    }

    // Filters the table component by input column returns "No results found!" foundResults is empty.
    const tableLogic = foundResults && foundResults.length > 0 ? 
        <FilterTableComponent
            keys={columnOptions}
            data={foundResults} 
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

export default FilterTable;