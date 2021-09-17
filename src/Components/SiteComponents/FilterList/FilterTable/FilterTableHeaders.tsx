const FilterTableHeaders = (props: {data: any[]}) => {

    const table_headings = Object.keys(props.data[0])

    const displayHeaders = table_headings.map((data: string) => <th>{data.toUpperCase()}</th>)

    return (
        <tr key={table_headings[0]}>
            {displayHeaders}
        </tr>
    )
}

export default FilterTableHeaders