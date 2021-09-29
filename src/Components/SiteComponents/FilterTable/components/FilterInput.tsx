// PROPS
import { 
    FilterInputProps, 
    FilterSearchProps, 
    FilterSelectProps 
} from "Props/Components/FilterProps"

export const FilterInput = (props: FilterInputProps) => (
    // input component which takes value and placeholder.
    // onChange is detirmined on the level above.
    <input type="search"
        className="filter-input"
        value={props.value}
        onChange={props.on_change}
        placeholder={props.placeholder}
    />
)

export const FilterSelect = (props: FilterSelectProps) => {

    // Takes a array of strings and returns an option for each one
    const displayOptions = props.data.map(column => (
        <option value={column} 
            key={column}
        >
            {column.toUpperCase()}
        </option>
    ))

    return (
        // When column is selected, the level above sets the column for useState
        // default value is defined on level above
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