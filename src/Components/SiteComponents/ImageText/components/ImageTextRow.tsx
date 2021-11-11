// PROPS
import { ImageTextRowProps } from "Props/Components/ImageText"
// TOOLS
import { SiteLink } from "Tools/LinkTools"

const ImageTextRow = (props: ImageTextRowProps) => {

    const { description, image, link, title } = props

    return (
        <div className="site-flex">
            <div className="row-image">
                <SiteLink
                    link={link}
                    type="external"
                    placeholder={
                        <img className="site-responsive-image" 
                            alt={title}
                            src={image}
                        />
                    }
                />
            </div>
            <div className="row-description">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ImageTextRow