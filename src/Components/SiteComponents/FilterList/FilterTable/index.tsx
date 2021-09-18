import { FilterTableProps } from "Props/ComponentProps"
import FilterTableHeaders from "./FilterTableHeaders"
import FilterTableRows from "./FilterTableRows"

const FilterTable = (props: FilterTableProps) => (
    <table className="filter-table">
        <FilterTableHeaders 
            data={props.data} 
        />
        <FilterTableRows 
            data={props.results_data} 
        />
    </table>
)

export default FilterTable