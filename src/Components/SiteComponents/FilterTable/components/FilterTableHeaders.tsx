// PROPS
import { FilterTableHeaderProps } from "Props/Components/FilterProps"

const FilterTableHeaders = (props: FilterTableHeaderProps) => {

    // returns table heading in uppercase for each key.
    const displayHeaders = props.keys.map((data: string) => (
        <th key={data}>{data.toUpperCase()}</th>
    ))

    return (
        <thead>
            <tr>
                {displayHeaders}
            </tr>
        </thead>
    )
}

export default FilterTableHeaders