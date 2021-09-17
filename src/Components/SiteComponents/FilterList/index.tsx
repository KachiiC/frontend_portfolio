import { useState } from 'react'
// CSS
import './FilterList.css'
// COMPONENTS
import FilterInput from './FilterTable/FilterInput'
import FilterTable from './FilterTable'

interface FilterProps { 
    data: any[]; 
    placeholder: string
}

const FilterList = (props: FilterProps) => {

    const { data, placeholder } = props

    const [input, setInput] = useState('');
    const [foundResults, setFoundResults] = useState(data);

    const filterFunction = (e: { target: { value: any; }; }) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = data.filter((result: any) => {
                return result.name.toLowerCase().startsWith(keyword.toLowerCase());
            })
            setFoundResults(results);
        } else {
            setFoundResults(props.data);
        }
        setInput(keyword);
    }

    const tableLogic = foundResults && foundResults.length > 0 ? 
        <FilterTable 
            data={data} 
            results_data={foundResults} 
        />
        : 
        <div>No results found!</div>

    return (
        <div className="">
            <FilterInput
                value={input}
                on_change={filterFunction}
                placeholder={placeholder}
            /> 
            {tableLogic}
        </div>
    )
}

export default FilterList;