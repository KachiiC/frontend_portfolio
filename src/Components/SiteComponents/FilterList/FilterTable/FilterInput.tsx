// PROPS
import { FilterInputProps, FilterSearchProps, FilterSelectProps } from "Props/ComponentProps"

export const FilterInput = (props: FilterInputProps) => {
    
    const {value, on_change, placeholder} = props

    return (
        <input
            className="filter-input"
            type="search"
            value={value}
            onChange={on_change}
            placeholder={placeholder}
        />  
    )
}

export const FilterSelect = (props: FilterSelectProps) => {

    const displayOptions = props.data.map(column => (
        <option value={column} 
            key={column}
        >
            {column.toUpperCase()}
        </option>
    ))

    return (
        <select name="columns"
            onChange={props.function} 
            defaultValue={props.default}
        >
            {displayOptions}
        </select>
    )
}

export const FilterSearch = (props: FilterSearchProps) => (
    <div className="filter-search">
        <FilterSelect 
            data={props.data} 
            function={props.function}
            default={props.default}
        />
        <FilterInput
            value={props.value}
            on_change={props.on_change}
            placeholder={props.placeholder}
        />
    </div>
)

export default FilterSearch