// CSS
import './SiteTable.css'
// PROPS
import { SiteTableProps } from "Props/Components/TableProps"
// TOOLS
import { ArrrayObjectKeys } from "Tools/ObjectDataTools"
import { RenderLogic } from "Tools/FunctionTools"
// COMPONENTS
import SiteTableHeaders from "./components/TableHeaders"
import SiteTableRows from "./components/TableRows"

const SiteTable = (props: SiteTableProps) => {

    const { data, keys } = props
    
    return (
        <div className="site-table-container">
            <table className="site-table w-100">
                <SiteTableHeaders 
                    keys={RenderLogic(keys,ArrrayObjectKeys(data))} 
                />
                <SiteTableRows 
                    data={data} 
                />
            </table>
        </div>
    )
}

export default SiteTable