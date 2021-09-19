import { SiteSingleCardProps } from "Props/ComponentProps"

export const SingleCard = (props: SiteSingleCardProps) => {

    const { title, description, image, span } = props

    return (
        <div className={`site-single-card site-col-${span}`}
            key={title} 
        >
            <img src={image}
                alt="player" 
                className="site-responsive-image"
            />
            <div className="site-text-container">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}