// PROPS
import { SlideshowCaptionProps, SlideshowRowImageProps, SlideshowRowsProps } from "Props/ComponentProps"
// TOOLS
import { GridStyle } from "Tools/GridTools"

export const SlideshowRowImage = (props: SlideshowRowImageProps) => (
    <div className="slideshow-column site-col-1">
        <img className="site-responsive-image cursor-pointer" 
            src={props.image}
            alt={props.caption}
            onClick={props.click} 
        />
    </div>
)

export const SlideshowCaption = (props: SlideshowCaptionProps) => (
    <div className="caption-container">
        <p>{props.caption}</p>
    </div>
)

export const SlideshowRows = (props: SlideshowRowsProps) => {

    const { first, last, data, thumbnails, setFunction } = props

    const displayedImagesRow = data.map(image => {
    
        const currentImage = data.indexOf(image)
        
        return (
            <SlideshowRowImage
                caption={image.caption}
                click={() => setFunction(currentImage)}
                image={image.image}
                key={image.caption}
            />
        )
    }).slice(first, last)

    return (
        <div className="site-grid slideshow-row" 
            style={GridStyle(thumbnails)}
        >
            {displayedImagesRow}
        </div>
    )
}
