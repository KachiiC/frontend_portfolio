// PROPS
import { singleCardProps } from "../AntdProps"
// COMPONENTS
import { Link } from "react-router-dom"
import CardComponent from "./CardComponent"

const SingleCard = (props: singleCardProps) => {

    const cardComponent = (
        <CardComponent
            image={props.image}
            title={props.title}
            description={props.description}
        />
    )

    const linkLogic = props.link ? 
        <a href={props.link} 
            target="_blank" 
            rel="noreferrer"
        >
            {cardComponent}
        </a>
        :
        <Link to={`/${props.title}`}>
            {cardComponent}
        </Link>

    return (
        <div className="site-card-container">
            {linkLogic}
        </div>
    )
}

export default SingleCard