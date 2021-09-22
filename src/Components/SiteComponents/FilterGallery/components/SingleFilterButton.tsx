import { filterButtonProps } from "Props/ComponentProps"

const SingleFilterButton = (props: filterButtonProps) => (
    <div className="filter-button cursor-pointer site-col-1" 
        id={props.title}
        onClick={props.click} 
        key={props.title}
    >
        {props.title}
    </div>
)

export default SingleFilterButton