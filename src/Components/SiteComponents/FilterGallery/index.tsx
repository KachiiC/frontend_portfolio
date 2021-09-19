import { useEffect, useState } from "react"
// CSS 
import './FilterGallery.css'
// PROPS
import { SiteCardProps } from "Props/ComponentProps"
// TOOLS
import { UnqiueValues } from "Tools/ObjectDataTools"
// COMPONENTS
import SiteCards from "../SiteCards"
import SingleFilterButton from "./components/SingleFilterButton"
import { GridStyle } from "Tools/GridTools"

const FilterGallery = (props: SiteCardProps) => {

    const [filterType, setFilterType] = useState('')
    const [resultsData, setResultsData] = useState(props.data)

    useEffect(() => {
        if (filterType !== '') {
            setResultsData(props.data.filter(data => data.type === filterType))
        }
    },[filterType, props.data])

    const typesList = UnqiueValues(props.data, "type")

    const filterButtons = typesList.map((type: string) => (
        <SingleFilterButton
            title={type}
            click={() => setFilterType(type)}
        />
    )) 

    filterButtons.unshift(
        <SingleFilterButton
            title="All"
            click={() => setResultsData(props.data)}
        />
    )
    
    return (
        <>
            <div className="site-grid" 
                style={GridStyle(filterButtons.length)}
            >
                {filterButtons}
            </div>
            <SiteCards 
                data={resultsData} 
                card_size={props.card_size}
            />
        </>
    )
}

export default FilterGallery