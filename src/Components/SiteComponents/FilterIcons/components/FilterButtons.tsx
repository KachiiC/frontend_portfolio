// PROPS
import { FilterIconButtonsProps } from "Props/Components/FilterIconProps"

const FilterButtons = (props: FilterIconButtonsProps) => {
    
    // For each string in the array, returns a SingleFilterButton.
    // The setFunction is fed in and sets the current button to the state on the level above
    const displayButtons = props.data.map(stack => (
        <button onClick={() => props.setFunction(stack)}>
            {stack}
        </button>
    ))

    // Add a button named "all" at front of list, 
    // setAll property will be defined on level above to return all objects in the array 
    displayButtons.unshift(
        <button onClick={props.setAll}>
            All
        </button>
    )

    return (
        <div className="site-flex">
            <div className="filter-icon-buttons">
                {displayButtons}
            </div>
        </div>
    )
}

export default FilterButtons