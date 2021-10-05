// PROPS
import { LinkLogicProps, SiteSingleCardProps } from "Props/Components/CardProps"
//COMPONENTS
import { Link } from "react-router-dom"

const SingleCard = (props: SiteSingleCardProps) => {

    // PROPS
    const { title, description, image, span } = props

    const LinkLogic = (comp: LinkLogicProps) => {
        // If object has a link key...
        if (props.link) {
            // if link type is external, returns a href tag
            return props.link_type === "external" ?
                <a href={props.link} target="_blank" rel="noreferrer">
                    {comp.component}
                </a>
                :
                // if link type is local, returns react-router-dom Link component
                <Link to={`/${props.link}`}>
                    {comp.component}
                </Link>
        }
        
        return <> {comp.component} </>
    }

    return (
        <div className={`site-single-card w-90 site-col-${span}`} >
            {/* If link is passed, returns a link based on type, else it will just return the image */}
            <LinkLogic 
                component={
                    <img className="site-responsive-image" 
                        src={image} 
                        alt={title} 
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