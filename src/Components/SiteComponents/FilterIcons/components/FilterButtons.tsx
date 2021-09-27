import { UnqiueValues } from "Tools/ObjectDataTools"

const FilterButtons = (props: any) => {
    const displayButtons = UnqiueValues(props.data, "type").map((stack: string) => (
        <button onClick={() => props.setFunction(stack)}>
            {stack}
        </button>
    ))

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