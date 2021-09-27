// PROPS
import { FilterButtonProps, SingleFilterButtonProps } from "Props/Components/FilterGalleryProps"

const SingleFilterButton = (props: SingleFilterButtonProps) => (
    <div className="filter-button cursor-pointer" 
        id={props.title}
        onClick={props.click} 
        key={props.title}
    >
        {props.title}
    </div>
)

const DisplayedFilterButtons = (props: FilterButtonProps) => {
    
    const filterButtons = props.data.map((type: string) => (
        <SingleFilterButton
            title={type}
            click={() => props.setFilterFunction(type)}
        />
    )) 
    
    filterButtons.unshift(
        <SingleFilterButton
            title="All"
            click={props.setAll}
        />
    )

    return (
        <>
            {filterButtons}
        </>
    )
}


export default DisplayedFilterButtons