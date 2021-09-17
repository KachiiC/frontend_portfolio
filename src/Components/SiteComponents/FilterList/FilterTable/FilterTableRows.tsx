interface FilterTableRowProps {
    data: any[];
}

const FilterTableRows = (props: FilterTableRowProps) => {

    const table_rows = props.data.map((data: any) => {

        const values_list = Object.values(data)

        const displayed_value = values_list.map((val: any) => (
            <td key={val}>
                {val}
            </td>
        ))

        return (
            <tr>
                {displayed_value}
            </tr>
        )
    })

    return (
        <>
            {table_rows}
        </>
    )
}

export default FilterTableRows