import { FilterTableProps } from "Props/ComponentProps"

const FilterTableRows = (props: FilterTableProps) => {

    const table_rows = props.data.map((data, index) => {

        const values_list = Object.values(data)

        const displayed_value = values_list.map((val: any) => (
            <td key={val}>
                {val}
            </td>
        ))

        return (
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