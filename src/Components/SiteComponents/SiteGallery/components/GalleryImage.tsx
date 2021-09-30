// PROPS
import { 
    GalleryImageProps, 
    GalleryModalImageProps, 
    GallerySelectedImageProps 
} from "Props/Components/GalleryProps"
// TOOLS
import { IfStatement } from "Tools/FunctionTools"

export const GalleryImage = (props:GalleryImageProps) => (
    <img src={props.image} 
        alt={props.title}
        className="site-responsive-image cursor-pointer site-border-white"
        onClick={IfStatement(props.click)} 
    />
)

export const GallerySelectedImage = (props: GallerySelectedImageProps) => (
    <div className={`w-${props.width} m-auto`}>
        <GalleryImage 
            image={props.image}
            title="selected_image"
        />
    </div>
)

export const GalleryModalImage = (props: GalleryModalImageProps) => (
    <>
        <h2 className="gallery-modal-title">
            {props.title}
        </h2>
        <GallerySelectedImage
            image={props.image}
            width={props.width}
        />
    </>
)