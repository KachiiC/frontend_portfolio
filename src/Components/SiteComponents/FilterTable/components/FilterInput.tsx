// PROPS
import { 
    FilterInputProps, 
    FilterSearchProps, 
    FilterSelectProps 
} from "Props/Components/FilterProps"

export const FilterInput = (props: FilterInputProps) => {
    
    // PROPS
    const { on_change, placeholder, value } = props

    return (
        // input component which takes value and placeholder.
        // onChange is detirmined on the level above.
        <input type="search"
            className="filter-input"
            onChange={on_change}
            placeholder={placeholder}
            value={value}
        />
    )
}

export const FilterSelect = (props: FilterSelectProps) => {

    // PROPS
    const { column_function, data, default_value } = props

    // Takes a array of strings and returns an option for each one
    const displayOptions = data.map(column => (
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
            onChange={column_function} 
            defaultValue={default_value}
        >
            {displayOptions}
        </select>
    )
}

export const FilterSearch = (props: FilterSearchProps) => {

    // PROPS
    // const { data, column_function, default_value, value, on_change, placeholder } = props
    const {
        value,
        on_change,
        placeholder,
        data,
        column_function,
        default_value
    } = props

    return (
        <div className="filter-search">
            <FilterSelect 
                column_function={column_function}
                data={data} 
                default_value={default_value}
            />
            <FilterInput
                on_change={on_change}
                placeholder={placeholder}
                value={value}
            />
        </div>
    )
}

export default FilterSearch