// PROPS
import { FilterTableProps } from "Props/Components/FilterProps"
// COMPONENTS
import FilterTableHeaders from "./FilterTableHeaders"
import FilterTableRows from "./FilterTableRows"

const FilterTableComponent = (props: FilterTableProps) => {

    const { data, keys } = props

    return (
        <table className="filter-table w-90">
            <FilterTableHeaders keys={keys} />
            <FilterTableRows data={data} />
        </table>
    )
}

export default FilterTableComponent