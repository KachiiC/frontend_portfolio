// PROPS
import { FilterTableProps } from "Props/Components/FilterProps"
// COMPONENTS
import FilterTableHeaders from "./FilterTableHeaders"
import FilterTableRows from "./FilterTableRows"

const FilterTableComponent = (props: FilterTableProps) => (
    <table className="filter-table">
        <FilterTableHeaders 
            keys={props.keys} 
        />
        <FilterTableRows 
            data={props.data} 
        />
    </table>
)

export default FilterTableComponent