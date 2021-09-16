// PROPS
import { GalleryImageProps } from "Props/ComponentProps"

const RowImage = (props: GalleryImageProps) => {

    const {image, title, click} = props

    return (
        <div className="site-col-1 site-border-white">
            <img src={image} 
                alt={title}
                className="site-responsive-image cursor-pointer"
                onClick={click}
            />
        </div>

    )
}

export default RowImage