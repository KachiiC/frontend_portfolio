// PROPS
import { SiteSingleCardProps } from "Props/Components/CardProps"
import { Link } from "react-router-dom"


const SingleCard = (props: SiteSingleCardProps) => {

    const { title, description, image, span } = props

    const LinkLogic = (comp: any) => {
        if (props.link) {
            return props.link_type === "external" ?
                <a href={props.link} target="_blank" rel="noreferrer">
                    {comp.component}
                </a>
                :
                <Link to={`/${props.link}`}>
                    {comp.component}
                </Link>
        }
        
        return (
            <>
                {comp.component}
            </>
        )
    }

    return (
        <div className={`site-single-card w-90 site-col-${span}`}
            key={title} 
        >
            <LinkLogic 
                component={
                    <img src={image}
                        alt="player" 
                        className="site-responsive-image"
                    />
                }
            /> 
            <div className="site-text-container">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default SingleCard