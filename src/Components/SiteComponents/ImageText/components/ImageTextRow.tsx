// PROPS
import { ImageTextRowProps } from "Props/Components/ImageText"

const ImageTextRow = (props: ImageTextRowProps) => {

    const { link, title, image, description } = props

    return (
        <div className="site-flex">
            <div className="row-image">
                <a href={link} 
                    target="_blank" 
                    rel="noreferrer"
                >
                    <img className="site-responsive-image" 
                        alt={title}
                        src={image}
                    />
                </a>
            </div>
            <div className="row-description">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ImageTextRow