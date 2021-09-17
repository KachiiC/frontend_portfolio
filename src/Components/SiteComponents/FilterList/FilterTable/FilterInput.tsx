interface FilterInputProps {
    on_change: any;
    placeholder: string;
    value: string;
}

const FilterInput = (props: FilterInputProps) => {
    
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

export default FilterInput