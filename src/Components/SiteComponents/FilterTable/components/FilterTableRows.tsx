// PROPS
import { FilterTableRowProps } from "Props/Components/FilterProps"

const FilterTableRows = (props: FilterTableRowProps) => {

    // PROPS
    const { data } = props
    
    const table_rows = data.map((obj, index) => {

        // returns array for every object value
        const values_list = Object.values(obj)

        // creates a table row column for each value
        const displayed_value = values_list.map((val: string) => (
            <td key={val}>
                {val}
            </td>
        ))

        return (
            // returns row of columns for each value in object
            <tr key={index}>
                {displayed_value}
            </tr>
        )
    })

    return (
        <tbody>
            {table_rows}
        </tbody>
    )
}

export default FilterTableRows