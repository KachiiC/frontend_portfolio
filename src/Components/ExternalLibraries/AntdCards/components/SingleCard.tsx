// PROPS
import { singleCardProps } from "../AntdProps"
// COMPONENTS
import { Link } from "react-router-dom"
import CardComponent from "./CardComponent"

const SingleCard = (props: singleCardProps) => {

    const { description, image, link, title } = props

    const cardComponent = (
        <CardComponent
            image={image}
            title={title}
            description={description}
        />
    )

    const linkLogic = link ? 
        <a href={link} 
            target="_blank" 
            rel="noreferrer"
        >
            {cardComponent}
        </a>
        :
        <Link to={`/${title}`}>
            {cardComponent}
        </Link>

    return (
        <div className="site-card-container">
            {linkLogic}
        </div>
    )
}

export default SingleCard