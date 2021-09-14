// COMPONENTS
import { SingleTabProps } from "../AntdTabsProps"

const SingleTab = (props: SingleTabProps) => {

    const descriptionLogic = () => {
        if (props.description) return (
            <p className="tabs-description">
                {props.description}
            </p>
        )
    }

    return (
        <>
            <h1 className="tabs-title">
                {props.title}
            </h1>
            {descriptionLogic()}
            <div className="tabs-content">
                {props.content}
            </div>
        </>
    )
}

export default SingleTab