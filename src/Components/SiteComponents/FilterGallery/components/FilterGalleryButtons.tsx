// PROPS
import { FilterButtonProps, SingleFilterButtonProps } from "Props/Components/FilterGalleryProps"

const SingleFilterButton = (props: SingleFilterButtonProps) => (

    // Takes title as a string and click as arguments and returns a button
    <div className="filter-button cursor-pointer" 
        id={props.title}
        onClick={props.click} 
        key={props.title}
    >
        {props.title}
    </div>
)

const FilterGalleryButtons = (props: FilterButtonProps) => {

    // For each string in the array, returns a SingleFilterButton.
    // The setFunction is fed in and sets the current button to the state on the level above
    const filterButtons = props.data.map(type => (
        <SingleFilterButton
            title={type}
            click={() => props.setFilterFunction(type)}
        />
    )) 
    
    // Add a button named "all" at front of list, 
    // setAll property will be defined on level above to return all objects in the array 
    filterButtons.unshift(
        <SingleFilterButton
            title="All"
            click={props.setAll}
        />
    )

    return <>{filterButtons}</>
}


export default FilterGalleryButtons