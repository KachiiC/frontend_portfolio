// PROPS
import { FilterTableProps } from "Props/Components/FilterProps"

const FilterTableHeaders = (props: FilterTableProps) => {

    const table_headings = Object.keys(props.data[0])

    const displayHeaders = table_headings.map((data: string) => (
        <th key={data}>{data.toUpperCase()}</th>
    ))

    return (
        <thead>
            <tr key={table_headings[0]}>
                {displayHeaders}
            </tr>
        </thead>
    )
}

export default FilterTableHeaders