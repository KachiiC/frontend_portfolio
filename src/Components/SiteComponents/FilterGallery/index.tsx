import { useEffect, useState } from "react"
// CSS 
import './FilterGallery.css'
// PROPS
import { SiteCardProps } from "Props/Components/CardProps"
// TOOLS
import { UnqiueValues } from "Tools/ObjectDataTools"
// COMPONENTS
import SiteCards from "../SiteCards"
import SingleFilterButton from "./components/SingleFilterButton"

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
            <div className="filter-buttons-container w-80 m-auto" >
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