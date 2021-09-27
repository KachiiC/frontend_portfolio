// PROPS
import { filterButtonProps } from "Props/Components/FilterGalleryProps"

const SingleFilterButton = (props: filterButtonProps) => (
    <div className="filter-button cursor-pointer" 
        id={props.title}
        onClick={props.click} 
        key={props.title}
    >
        {props.title}
    </div>
)

export default SingleFilterButton